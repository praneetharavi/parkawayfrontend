import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
 
  {path: 'Login',component : LoginpageComponent},
  {path: 'signuppage',component : SignUpPageComponent},
  {path: 'Home',component : WelcomePageComponent},
  { path: '', redirectTo: 'Home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
