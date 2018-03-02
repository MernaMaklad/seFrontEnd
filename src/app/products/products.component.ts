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
  constructor(private productsService: ProductsService,private router: Router) { }

  ngOnInit() {

    this.productsService.getProducts().subscribe(
      res => {console.log(res);
        this.products=res;
        console.log("ashour");
        console.log(this.products);
      }

    );

    

  }

}
