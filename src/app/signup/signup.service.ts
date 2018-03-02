import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment'
import { SignupComponent } from './signup.component';
@Injectable()
export class SignupService {

  constructor(private httpClient: HttpClient) { }

createUser(username, password,comp){
    return this.httpClient.post(
      'http://localhost:3000/api/user/createUser',{
        "username":username,
        "password": password,
        "component": comp
      }
    )
  }

}
