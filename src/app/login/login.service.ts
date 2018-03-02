import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment'
import { LoginComponent } from './login.component';
import { AppService } from '../app.service';

@Injectable()
export class LoginService {

  constructor(private httpClient: HttpClient,private appService: AppService) {
    
   }
login(username, password){
  this.appService.setUsername(username);

    return this.httpClient.post(
      'http://localhost:3000/api/user/Login',{
        "username":username,
        "password": password
      }
    )
    
  }

}