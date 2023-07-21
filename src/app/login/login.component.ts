import { Component } from '@angular/core';
import { User } from './user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { RouterService } from '../service/router.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  uObj:User;


  constructor(private router:Router, private authservice:AuthService,private routerservice:RouterService)
  {
    this.uObj = new User();
  }

  userLogin(loginForm:NgForm)
  {

    if(loginForm.valid)
    {
      this.uObj = loginForm.value;

      console.log(this.uObj.username);
      console.log(this.uObj.password);

      this.authservice.authenticateUser(this.uObj).subscribe(
        (res:any) => {console.log("token "+res["token"]);

        this.authservice.setBearerToken(res["token"]);
        this.routerservice.routeToNotes();
        },
        err=>{console.log(err)}
      )


      // if(this.uObj.uname=="Tim" && this.uObj.upass=="timpass")
      // {
      //   this.router.navigate(["note"]);
      // routeToNotes()
      // }
    }
  }
}
