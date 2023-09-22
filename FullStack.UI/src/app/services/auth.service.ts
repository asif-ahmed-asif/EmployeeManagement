import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../model/user.mode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.baseApiUrl;

  constructor(private http : HttpClient) { }

  addUser(user : User) : Observable<any>{
    return this.http.post<any>(this.baseUrl + 'api/auth', user);
  }

  login(user : User) : Observable<any>{
    return this.http.post<any>(this.baseUrl + 'api/auth/login', user);
  }

  storeToken(token : string){
    localStorage.setItem('token',token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logOut(){
    localStorage.clear();
  }


}
