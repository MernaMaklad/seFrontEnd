import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment'
import { ProductsComponent } from './products.component';
import { AppService } from '../app.service';
@Injectable()
export class ProductsService {

  constructor(private httpClient: HttpClient,private appService: AppService) { }

  getProducts(){
    
  
      return this.httpClient.post(
        'http://localhost:3000/api/user/FindProductByUserID',{
          "userId":this.appService.getUserid()
        }
      )
      
    }
  
}
