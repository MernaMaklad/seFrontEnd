import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
username: any;
password: any;
  constructor(private loginService: LoginService,private router: Router,private appService: AppService) { }

  ngOnInit() {
    this.username="";
    this.password="";
  }

  login(){
  this.loginService.login(this.username,this.password).subscribe(
      res => {

        console.log(res);
        if(res.success){
          this.appService.setUserid(res.user_id);
          console.log(this.appService.getUserid());
      this.router.navigateByUrl('')}
      }

    );
  }
}



















