import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment'
import { ComponentProductsComponent } from './component-products.component';
import { AppService } from '../app.service';
@Injectable()
export class ComponentProductsService {

  constructor(private httpClient: HttpClient,private appService: AppService) { }

  getCompProducts(comp){
    
  
    return this.httpClient.post(
      'http://localhost:3000/api/user/FindProductByComponent',{
        
        "component": comp
      }
    )
    
  }
}
