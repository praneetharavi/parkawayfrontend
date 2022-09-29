import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  //constructor() { }
  type : string ="password";
  isText : boolean = false;
  eyeIcon :string = "fa-eye-slash";
  signUpForm!: FormGroup;
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.signUpForm= this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      })
  };
  public hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-sye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }
  
  onSignup(){
    if(this.signUpForm.valid){
      //perform logic for signup

      console.log(this.signUpForm.value)
    }
    else{
      //logic for throwing error
    }
    }
 }

