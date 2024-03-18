import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmPopupComponent } from 'src/app/common/components/confirm-popup/confirm-popup.component';

@Injectable({
  providedIn: 'root'
})
export class MatDialogService {
  dialogCommonRef!: MatDialogRef<ConfirmPopupComponent>;
  constructor(public dialog: MatDialog) { }
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

  public closeCommonDialog():Observable<any>{
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
