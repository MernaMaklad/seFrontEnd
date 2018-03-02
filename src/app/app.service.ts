import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
username;
userid;
comp;
  constructor() {
    this.username="";
    this.userid="";
    this.comp="";

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

 setComp(val:String){
    this.comp=val;
  }

  getComp(){
    return this.comp;
  }

}
