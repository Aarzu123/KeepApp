import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Note } from '../note/note';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../service/auth.service';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  

  foundNote:Note;
  notes:Note[];
  noteSubject:BehaviorSubject<Note[]>


  constructor(private httpClient:HttpClient, private authservice:AuthService ) 
  { 
    this.foundNote=new Note();
    this.notes=[];
    this.noteSubject =  new BehaviorSubject<Note[]>([]);
  }


  fetchFromServer()
  {
    return this.httpClient.get<Note[]>("http://localhost:3000/api/v1/notes",
    {
      headers: new HttpHeaders().set('Authorization', `${this.authservice.getBearerToken()}`)
    }).subscribe(noteResult =>{

      this.notes = noteResult;
      this.noteSubject.next(this.notes)

    },
    (err:any)=>{
      this.noteSubject.error(err)
    }
    )
    
  }

  getNotes():Observable<Note[]>
  {
    return this.noteSubject;
  }

  addNotes(noteObj:Note)
  {
    return this.httpClient.post<Note>("http://localhost:3000/api/v1/notes",noteObj,
    {
      headers: new HttpHeaders().set('Authorization', `${this.authservice.getBearerToken()}`)
    }).pipe(tap(addedNote =>{

      this.notes.push(addedNote)
      this.noteSubject.next(this.notes)

    }))
  }

  getNoteById(noteId:number):any
  {
    // return this.httpClient.get<Note>(`http://localhost:3000/api/v1/notes/${noteId}`)
    
    console.log("Get By id "+this.notes)

    let foundNote = this.notes.find(note => note.id === noteId);
    console.log("Found Note ",foundNote?.id)
    console.log("Found Note ",foundNote?.title)
    console.log("Found Note ",foundNote?.text)
    return foundNote;
  }


  editSaveNote(note:Note)
  {
    console.log("From Note Service "+note.id+"   "+note.title+"  "+note.text);
    return this.httpClient.put<Note>(`http://localhost:3000/api/v1/notes/${note.id}`,note,
    {
      headers: new HttpHeaders().set('Authorization', `${this.authservice.getBearerToken()}`)
    }).pipe(tap(editedNote =>{
      let note = this.notes.find(note => note.id === editedNote.id);
      note = Object.assign({},editedNote);
      this.noteSubject.next(this.notes)
    }))
  }
}