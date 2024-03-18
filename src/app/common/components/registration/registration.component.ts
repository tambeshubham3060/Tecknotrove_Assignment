import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CommonService } from '../../services/common.service';
import { MatDialogService } from '../../services/mat-dialogue.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  employeeForm!: FormGroup;
  employeeArray: Array<any> = [];

  constructor(public dialogRef: MatDialogRef<RegistrationComponent>,
    private fb: FormBuilder,
    private commonService: CommonService,
    private matDialogService: MatDialogService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.commonService.allEmployeeInfo.subscribe((res) => {
      this.employeeArray = res;
    })
  }

  submitForm() {
    if (this.employeeForm.valid) {
      console.log('Form submitted:', this.employeeForm.value);
      if (this.employeeForm.value.userName && this.employeeForm.value.name && this.employeeForm.value.password) {
        if (this.employeeArray) {
          let Successful = this.employeeArray.find(employee => {
            if (employee.userName === this.employeeForm.value.userName) {
              return true
            } else {
              return false
            }
          })
          if(Successful){
            this.matDialogService.openAlertDialog('User is already present!');
            this.employeeForm.reset();
          }else{
            this.commonService.setEmployeeInfo(this.employeeForm.value);
            this.dialogRef.close(true);
            this.employeeForm.reset();
          }
        } else {
          this.commonService.setEmployeeInfo(this.employeeForm.value);
          this.employeeForm.reset();
          this.dialogRef.close(null);
        }
      } else {
        this.matDialogService.openAlertDialog('Please enter mendatory fields!');
      }
    }
  }

  get employeeFormControls(): { [key: string]: AbstractControl } {
    return this.employeeForm.controls;
  }
  public close(value: any) {
    this.dialogRef.close(value);
  }
}
