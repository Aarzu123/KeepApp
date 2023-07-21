import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router:Router) { }

  routeToLogin()
  {
    this.router.navigate(['login']);
  }

  routeToNotes()
  {
    this.router.navigate(['note']);
  }

  routeToNotesView()
  {
    this.router.navigate(['note/view/notesview']);
  }


  routeToEditNote(noteid:number)
  {
    console.log("From Router ",noteid)
    this.router.navigate(['note',{
      outlets:{
        noteEditOutlet:['note',noteid,'edit']
      }
    }])
  }
}