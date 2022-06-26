import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiURL: string = `${this.config.apiUrl}orders`;

  constructor(
    private http: HttpClient,
    private config:ConfigService
    ) { }

  create(order: Order): Observable<Order> {
    delete order._id;
    return this.http.post<Order>(this.apiURL, order);
  }
}
