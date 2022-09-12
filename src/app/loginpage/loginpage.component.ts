import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})

export class LoginpageComponent implements OnInit {

  prane : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  public userProfileForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
  });
  public updateUserProfile(): void {
    // Logic to update the user will go here, but for now, we'll just log the values
    console.log(
      this.userProfileForm.controls.first_name.value,
      this.userProfileForm.controls.last_name.value,
    );
  }
}
