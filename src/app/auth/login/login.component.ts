import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationComponent } from 'src/app/common/components/registration/registration.component';
import { CommonService } from 'src/app/common/services/common.service';
import { MatDialogService } from 'src/app/common/services/mat-dialogue.service';
import { ConfirmPopupComponent } from 'src/app/common/components/confirm-popup/confirm-popup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  errorMessage: any = null;
  employeeArray: Array<any> = [];
  constructor(private router: Router, private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private commonService: CommonService,
    private matDialogService: MatDialogService) { }

  userToken: any;
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })

    this.commonService.allEmployeeInfo.subscribe(res => {
      if(res){
        this.employeeArray = res;
      }
    })
  }

  get loginFormControls(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.loginForm.markAllAsTouched();

    let Successful = this.employeeArray.find(employee => {
      if (employee.userName === this.loginForm.value.userName && employee.password === this.loginForm.value.password) {
        return true
      } else {
        return false
      }
    })
    if (Successful) {
      this.router.navigateByUrl('employee');
    } else {
      let errorPopup = this.dialog.open(ConfirmPopupComponent, {
        width: '600px',
        height: 'auto',
        panelClass: 'confirmpopup',
        disableClose: true,
        data: {
          message: "User doesn't exist. Please Register!",
          type: 'alert'
        },
      });
      errorPopup.afterClosed().subscribe(res => {
        if (res) {
          this.registration();
        }
      })
    }
  };

  registration() {
    this.dialog.open(RegistrationComponent, {
      width: '40%', height: '73%', disableClose: true
    });
  }
}
