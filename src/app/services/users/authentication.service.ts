import { Injectable, isDevMode } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../../model/user.model';
import { environment } from 'src/environments/environment';

const headers = {'content-type': 'application/json'};

const baseUrl = environment.apiURL+'/api/users';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {}

  get(email: any): Observable<IUser>{
    console.log(email);
    return this.http.get<IUser>(`${baseUrl}/${email}`);
  }

  getUser(username: any): Observable<IUser>{
    console.log(username);
    return this.http.get<IUser>(`${baseUrl}/user/${username}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data,{headers});
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data,{headers});
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }


}
