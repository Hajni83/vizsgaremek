import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PayServiceService {
  private paySubject = new Subject<boolean>();
  paySubjectObservable = this.paySubject.asObservable();

  constructor() { }

  buttonClicked() {
    this.paySubject.next(true);
  }
}
