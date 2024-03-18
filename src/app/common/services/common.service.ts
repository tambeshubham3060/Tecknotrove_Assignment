import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  employeeArray: Array<any> = [];
  allEmployeeInfo: BehaviorSubject<any> = new BehaviorSubject(null);
  user: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { }

  setEmployeeInfo(employee: any) {
    this.user.next(employee)
    if (employee) {
      this.employeeArray.push(employee);
      this.allEmployeeInfo.next(this.employeeArray);
    }
  }

  isUndefinedOrNull(data: any) {
    // return data === undefined || data == null;
    if (data === null || data === undefined || data === '') {
      return true;
    } else {
      return false;
    }
  }

}
