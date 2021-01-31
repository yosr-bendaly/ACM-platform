import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//const AUTH_API = 'http://localhost:3000/loggedInUsers';
const AUTH_API = 'http://192.168.1.63:9090/acm/person/signin';
//const IDENT_API=' http://localhost:3000/users';
const IDENT_API='http://192.168.1.63:9090/acm/user/signup';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API , {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(IDENT_API , {
      username: user.username,
      name:user.name,
      email: user.email,
      password: user.password,
      key:user.key
    });
  }
}
