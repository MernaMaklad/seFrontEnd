import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment'
import { SignupComponent } from './signup.component';
import { AppService } from '../app.service';
@Injectable()
export class SignupService {

  constructor(private httpClient: HttpClient,private appService: AppService) { }

createUser(username, password,comp){
  this.appService.setUsername(username);
    return this.httpClient.post(
      'http://localhost:3000/api/user/createUser',{
        "username":username,
        "password": password,
        "component": comp
      }
    )
  }

}
