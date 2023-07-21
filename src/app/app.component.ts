import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'keepApp';

  userName:string="Admin"

  btnClass:string = "btn btn-success"

  IsDisable=false;

  btntext = "Click Me !!!"

  validateLogin = ()=>{

    this.btntext = "Validating !!!"

    setTimeout(()=>{

      this.btntext = "Login Success !!!"

    },2000)

  }
}
