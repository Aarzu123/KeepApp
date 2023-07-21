import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../login/user';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  private authUrl:string;

  constructor(private httpClient:HttpClient) 
  { 
    this.authUrl="http://localhost:3000/auth/v1";
  }

  authenticateUser(userDetails:User)
  {
    return this.httpClient.post(this.authUrl,userDetails);
  }

  setBearerToken(token:string)
  {
    localStorage.setItem('bearerToken',token);
  }

  getBearerToken()
  {
    return localStorage.getItem('bearerToken');
  }

  // isUserAuthenticated(token:any):Observable<boolean>
  // {
  //   return this.httpClient.post(`${this.authUrl}/isAuthenticated`,{},{
  //     headers:new HttpHeaders().set('Authorization',`Bearer ${token}`)
  //   }).pipe(map((res:any)=>res['isAuthenticated']));
  // }

  isUserAuthenticated(token:any):boolean
  {
    let status:boolean=true;
    
    this.httpClient.post(`${this.authUrl}/isAuthenticated`,{},{
      headers:new HttpHeaders().set('Authorization',`Bearer ${token}`)
    }).pipe(map((res:any)=>{
      res['isAuthenticated'], status=res['isAuthenticated']}));

      return status;
  }

}
