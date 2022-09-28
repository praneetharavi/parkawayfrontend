import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})

export class LoginpageComponent implements OnInit {

  type : string ="password";
  isText : boolean = false;
  eyeIcon :string = "fa-eye-slash";
  constructor(private router : Router) { }

  ngOnInit(): void {
  };

  public hideShowPass(){
this.isText = !this.isText;
this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-sye-slash";
this.isText ? this.type = "text" : this.type = "password";

  }
}
