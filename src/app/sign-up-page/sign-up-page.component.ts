import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  constructor() { }
  type : string ="password";
  isText : boolean = false;
  eyeIcon :string = "fa-eye-slash";
  ngOnInit(): void {
  };
  public hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-sye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }    }
