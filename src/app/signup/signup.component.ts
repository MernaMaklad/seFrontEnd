import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [SignupService]
})
export class SignupComponent implements OnInit {
username: any;
password: any;
comp:any;
  constructor(private signupService: SignupService,private router: Router) { }

  ngOnInit() {
  this.username="";
    this.password="";
    this.comp="";
  }

  signup(){
    console.log("username: " + this.username)
    console.log("pass " + this.password)

    this.signupService.createUser(this.username,this.password,this.comp).subscribe(
      res => {console.log(res)
      //this.router.navigateByUrl('')
      }

    );
  }


}
