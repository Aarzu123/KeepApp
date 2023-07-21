import { Injectable } from '@angular/core';
import { User } from './login/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // getByUserId(username:string)
  // {

  //   return this.httpclient.get<User>(`http:localhost:3000/users/${username}`)

  //   subscribeOn(

  //     userdata => this.userObj=userdata
  //   )
  // }
}
