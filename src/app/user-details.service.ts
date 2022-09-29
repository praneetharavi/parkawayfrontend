import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http:HttpClient) { }

  private  createurl : string ='http://localhost:8089/api/CreateUserDetails';
  public post(url: string, data: any) { 
    return this.http.post(url, data); 
    } 
}
