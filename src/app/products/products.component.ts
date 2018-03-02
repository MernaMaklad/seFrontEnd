import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]

})
export class ProductsComponent implements OnInit {
  products:any;
  settings:any;
  constructor(private productsService: ProductsService,private router: Router) { }

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





    this.productsService.getProducts().subscribe(
      res => {console.log(res);
        this.products=res;
        console.log("ashour");
        console.log(this.products);
      }

    );

    

  }

}
