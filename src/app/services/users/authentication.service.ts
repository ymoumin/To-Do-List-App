import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../../model/user.model';

const headers = { 'Content-Type': 'application/json'};
const baseUrl = 'http://localhost:9000/api/users';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {}

  get(email: any): Observable<IUser>{
    return this.http.get<IUser>(`${baseUrl}/${email}`);
  }

  create(data: any): Observable<IUser> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data,{headers});
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }


}