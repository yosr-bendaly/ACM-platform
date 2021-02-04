import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

const TOKEN_KEY = 'accessToken';
const TYPE_KEY = 'userType';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }
  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveType(userType): void {
    window.sessionStorage.removeItem(TYPE_KEY);
    window.sessionStorage.setItem(TYPE_KEY,userType );//JSON.stringify(userType)
    //json.stringify() converts a javascript object to a JavaScript Object Notation (JSON) string
  }

  public getType(): string {
    return sessionStorage.getItem(TYPE_KEY);//JSON.parse(...)
  }
}
