import { Component, OnInit } from '@angular/core';
import { Note } from '../note/note';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-notes-view',
  templateUrl: './notes-view.component.html',
  styleUrls: ['./notes-view.component.css']
})
export class NotesViewComponent implements OnInit {

  noteObj:Note;
  noteList:Note[];

  

  constructor(private noteservice:NoteService)
  {
    this.noteObj=new Note();
    this.noteList=[];

  }
  ngOnInit(): void
  {
    this.noteservice.getNotes().subscribe(
      noteData => {this.noteList = noteData,
        console.log(this.noteList)  
      },
      err => console.log(err)
    )
  }
}
