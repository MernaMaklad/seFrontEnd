import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment'
import { StoreComponent } from './store.component';
import { AppService } from '../app.service';
@Injectable()
export class StoreService {

  constructor(private httpClient: HttpClient,private appService: AppService) { }


  getAllProducts(){
    
  
    return this.httpClient.post(
      'http://localhost:3000/api/user/getProducts',{
        
      }
    )
    
  }

}
