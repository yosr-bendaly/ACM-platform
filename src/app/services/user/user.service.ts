import { IRole, IUser } from './../../interfaces/user';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://192.168.43.154:9090/acm/user';
//const API_URL='http://192.168.6.36:9090/acm/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(API_URL+"/getAllUser");
  }
//string token
  getUserByToken():Observable<IUser>{
    return this.http.get<IUser>(API_URL+"/currentUser");
  }
  getUserByUserName(username:string):Observable<IUser>{
    return this.http.get<IUser>(API_URL+"/"+username);
  }
  
 
  updateUser(token: string, params) {
    return this.http.post(`${API_URL}/update/${token}`, params);
}

getUserRole(token:string){
  return this.http.get<IRole>(`${API_URL}/${token}/roles`);
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
