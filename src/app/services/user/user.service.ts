import { IRole, IUser } from './../../interfaces/user';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000/users';
//const API_URL='http://localhost:9090/acm/user/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(API_URL);
  }

  getUserById(id:number):Observable<IUser>{
    return this.http.get<IUser>(API_URL+"/"+id);
  }
  
 
  updateUser(id: number, params) {
    return this.http.put(`${API_URL}/update/${id}`, params);
}

getUserRole(id:number){
  return this.http.get<IRole>(`${API_URL}/${id}/roles`);
}
  /*
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
  */
}
