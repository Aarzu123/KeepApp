import { Component, Input, OnInit } from '@angular/core';
import { Note } from './note';
import { RouterService } from '../service/router.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input()
  noteObj:Note;

 
  constructor(private routerservice:RouterService)
  {
    this.noteObj=new Note();

  }
  
  ngOnInit(): void{}

  openEditView()
  {
    console.log(this.noteObj.id)
    this.routerservice.routeToEditNote(this.noteObj.id);
  }

}
