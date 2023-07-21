import { Component } from '@angular/core';
import { Note } from '../note/note';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-note-taker',
  templateUrl: './note-taker.component.html',
  styleUrls: ['./note-taker.component.css']
})
export class NoteTakerComponent {

  noteObj:Note;
  noteList:Note[];

  noteForm:FormGroup;

  constructor(private noteservice:NoteService, private fb:FormBuilder)
  {
    this.noteObj=new Note();
    this.noteList=[];

    this.noteForm =  fb.group({

      title:['',Validators.required],
      text:['',Validators.compose([Validators.required,Validators.minLength(6)])]

    })

  }


  addNote(noteForm:FormGroup)
  {
    this.noteObj = noteForm.value;

    this.noteList.push(this.noteObj);

    if(noteForm.valid)
    {

      this.noteservice.addNotes(this.noteObj).subscribe(
        data => {console.log(data)},
        err => {console.log(err)}
      )

      console.log(this.noteObj.title);
      console.log(this.noteObj.text);
    }
    this.noteObj = new Note();
  }
}
