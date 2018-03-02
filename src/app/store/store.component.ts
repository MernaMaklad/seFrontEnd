import { Component, OnInit } from '@angular/core';
import { StoreService } from './store.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  providers: [StoreService]
})
export class StoreComponent implements OnInit {
  title = 'Products';
  products = [];
allproducts:any;
  constructor(private storeService: StoreService,private router: Router) { }

  ngOnInit() {


    this.storeService.getAllProducts().subscribe(
      res => {console.log(res.data);
        this.allproducts=res.data;
        console.log("ashour gded");
        console.log(this.allproducts);
      }

    );
  }

}
