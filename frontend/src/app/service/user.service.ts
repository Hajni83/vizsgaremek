import { User } from './../model/user';

import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  entity = 'users';
  constructor(
    private http:HttpClient,
    private config:ConfigService
  ) { }

  get(id?: string | number): Observable<User[]>{
    let url = `${this.config.apiUrl}${this.entity}`;
    if(id){
      url+=`/${id}`
    }

    return this.http.get<User[]>(url);
  }

  query(queryString:string):Observable<User[]>{
    const url = `${this.config.apiUrl}${this.entity}?${queryString}`;
    return this.http.get<User[]>(url);
  }

  update(user:User):Observable<User>{
    const url = `${this.config.apiUrl}${this.entity}/${user._id}`;
    return this.http.put<User>(url,user);
  }

  delete(id?:string) {
    return this.http.delete(`${this.config.apiUrl}${this.entity}/${id}`);
  }
}
