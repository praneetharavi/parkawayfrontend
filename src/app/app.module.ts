import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    WelcomePageComponent,
    SignUpPageComponent,
    SearchPageComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
