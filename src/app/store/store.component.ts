import { Component, OnInit } from '@angular/core';
import { StoreService } from './store.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  providers: [StoreService]
})
export class StoreComponent implements OnInit {
  title = 'Products';
 
allproducts:any;
settings:any;
  constructor(private storeService: StoreService,private router: Router) { }

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



    this.storeService.getAllProducts().subscribe(
      res => {console.log(res);
        this.allproducts=res;
        console.log("ashour gded");
        console.log(this.allproducts);
      }

    );
  }

}
