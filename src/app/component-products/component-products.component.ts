import { Component, OnInit } from '@angular/core';
import { ComponentProductsService } from './component-products.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';

@Component({
  selector: 'app-component-products',
  templateUrl: './component-products.component.html',
  styleUrls: ['./component-products.component.css'],
  providers: [ComponentProductsService]
})
export class ComponentProductsComponent implements OnInit {

allproducts:any;
settings:any;
constructor(private componentProductsService: ComponentProductsService,private router: Router,private appService: AppService) { }

  ngOnInit() {
this.settings = {
  columns: {
    createdAt: {
      title: 'createdAt'
    },
    updatedAt: {
      title: 'updatedAt'
    },
    _id: {
      title: '_id'
    },
    name: {
      title: 'name'
    },
    price: {
      title: 'price'
    },
    userId: {
      title: 'userId'
    },
    seller_name: {
      title: 'seller_name'
    },
    component: {
      title: 'component'
    }
  }
};



    this.componentProductsService.getCompProducts(this.appService.getComp()).subscribe(
      res => {console.log(res);
        this.allproducts=res;
        console.log("ashour gded");
        console.log(this.allproducts);
      }

    );
  }

}
