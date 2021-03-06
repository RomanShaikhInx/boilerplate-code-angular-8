import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private toastr: ToastrService,
    ) { }
  userData = new Subject();
 
  userData$  = this.userData.asObservable();

  // for set local storage value
  setLocalStorage(storageKey: any, storageValue: any) {
    localStorage.setItem(storageKey, storageValue);
  }
  sendProfilePic(pic) {
    this.userData.next(pic);
  }

  // for get local storage value
  getLocalStorage(storageKey: any) {
    return localStorage.getItem(storageKey);
  }

  // for remove local storage value
  removeLocalStorage(storageKey: any) {
    return localStorage.removeItem(storageKey);
  }

  // for delete local storage value
  deleteLocalStorage() {
    localStorage.clear();
  }

  // for success message of toster
  loggerSuccess(msg: string, timeOut = 1500) {
    this.toastr.success(msg, 'Success', { timeOut: timeOut, progressBar: true });
  }

  // for info message of toster
  loggerInfo(msg: string, timeOut = 2500) {
    this.toastr.info(msg, 'Info', { timeOut: timeOut, progressBar: true });
  }

  // for error message of toster
  loggerError(msg: string, timeOut = 2500) {
    this.toastr.error(msg, 'Error', { timeOut: timeOut, progressBar: true });
  }

  // for warning message of toster
  loggerWarning(msg: string, timeOut = 2500) {
    this.toastr.warning(msg, 'Warning', { timeOut: timeOut, progressBar: true });
  }
}
