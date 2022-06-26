import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../model/address';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  apiURL: string = `${this.config.apiUrl}addresses`;

  constructor(
    private http: HttpClient,
    private config:ConfigService
  ) { }

  create(address: Address): Observable<Address> {
    delete address._id;
    return this.http.post<Address>(this.apiURL, address);
  }
}
