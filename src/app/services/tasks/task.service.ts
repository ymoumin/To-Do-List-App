import { Injectable, isDevMode } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITask} from '../../model/task.model';
import { DEV } from 'src/environment/environment';
import { PROD } from 'src/environment/environment.prod';

const headers = { 'Content-Type': 'application/json'};
const baseUrl = !isDevMode() ? PROD.apiURL : DEV.apiURL+'/api/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ITask[]> {
    return this.http.get<ITask[]>(baseUrl);
  }

  get(id: any): Observable<ITask>{
    return this.http.get<ITask>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data,{headers});
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<ITask[]> {
    return this.http.get<ITask[]>(`${baseUrl}?title=${title}`);
  }

  findLatest(username: any): Observable<any> {
    return this.http.put<any>(`${baseUrl}/latest`, username, {headers});
  }

  findForUser(username: any): Observable<any> {
    return this.http.put<any>(baseUrl, username, {headers});
  }

}
