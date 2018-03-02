import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
username;
userid;
  constructor() {
    this.username="";
    this.userid="";

   }

   setUsername(val:String){
     this.username=val;
   }


   setUserid(val:String){
    this.userid=val;
  }

  getUsername(){
    return this.username;
  }


  getUserid(){
    return this.userid;
  }
}
