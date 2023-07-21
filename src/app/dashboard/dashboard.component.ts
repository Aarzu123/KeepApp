import { Component } from '@angular/core';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private noteservice:NoteService)
  {
    this.noteservice.fetchFromServer();
  }
}