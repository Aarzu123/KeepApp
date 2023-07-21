import { Component,Inject } from '@angular/core';
import { Note } from '../note/note';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from '../service/note.service';
import { RouterService } from '../service/router.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-note-view',
  templateUrl: './edit-note-view.component.html',
  styleUrls: ['./edit-note-view.component.css']
})
export class EditNoteViewComponent {

  noteObj:Note;
  noteForm:FormGroup;

  constructor(
    private dialogRef:MatDialogRef<EditNoteViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private noteservice:NoteService, private fb:FormBuilder,private routerservice:RouterService)
  {
    this.noteObj=new Note();

    this.noteObj = this.noteservice.getNoteById(this.data.noteId)

    this.noteForm =  fb.group({
      title:[this.noteObj.title,Validators.required],
      text:[this.noteObj.text,Validators.compose([Validators.required,Validators.minLength(6)])]
    })
  }

  editNote(noteForm:FormGroup)
  {
    let note = new Note();

    note.id=this.noteObj.id;
    note.title=noteForm.value.title;
    note.text=noteForm.value.text;

    this.noteservice.editSaveNote(note).subscribe(
        data => {console.log(data)},
        err => {console.log(err)}
      )
    this.dialogRef.close();
  }
}