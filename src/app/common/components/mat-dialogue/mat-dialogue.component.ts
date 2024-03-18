import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmPopupComponent } from '../confirm-popup/confirm-popup.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mat-dialogue',
  templateUrl: './mat-dialogue.component.html',
  styleUrls: ['./mat-dialogue.component.scss']
})
export class MatDialogueComponent implements OnInit {

  dialogCommonRef!: MatDialogRef<ConfirmPopupComponent>;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openCommonDialog(msg: any) {
    this.dialogCommonRef = this.dialog.open(ConfirmPopupComponent, {
      width: '600px',
      height: 'auto',
      panelClass: 'confirmpopup',
      disableClose: true,
      data: {
        message: msg,
        type: 'confirmation'
      },
    });
  }

  public closeCommonDialog(): Observable<any> {
    return this.dialogCommonRef.afterClosed();
  }

  openAlertDialog(msg: any) {
    this.dialogCommonRef = this.dialog.open(ConfirmPopupComponent, {
      width: '600px',
      height: 'auto',
      panelClass: 'confirmpopup',
      disableClose: true,
      data: {
        message: msg,
        type: 'alert'
      },
    });
  }
}
