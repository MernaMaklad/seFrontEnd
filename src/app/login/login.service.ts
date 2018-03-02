import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment'
import { LoginComponent } from './login.component';

@Injectable()
export class LoginService {

  constructor(private httpClient: HttpClient) {
    
   }
login(username, password){
    return this.httpClient.post(
      'http://localhost:3000/api/user/Login',{
        "username":username,
        "password": password
      }
    )
  }

}