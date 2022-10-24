import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../../models/LoginRequest';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  Login_url=environment.url

  
  LoginApi(form:LoginRequest) {
    return this.http.post(this.Login_url+'signin', form);
    
  }

}
