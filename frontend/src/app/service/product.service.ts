import { ConfigService } from './config.service';

import { Product } from './../model/product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiURL: string = `${this.config.apiUrl}products`;
  httpOptions: HttpHeaders = new HttpHeaders({
    'content-type': 'application/json'
  });

  constructor(
    private http: HttpClient,
    private config:ConfigService
  ) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiURL}`);
  }

  getById(productId?:string): Observable<Product>{
    return this.http.get<Product>(`${this.apiURL}/${productId}`);
  }

  getProductsByCategory(cat: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiURL}/search/${cat}`);
  }

  update(product:Product): Observable<Product>{
    return this.http.patch<Product>(`${this.apiURL}/${product._id}`, product);
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiURL, product);
  }

  remove(product:Product): Observable<Product>{
    return this.http.delete<any>(`${this.apiURL}/${product._id}`);
  }

}
