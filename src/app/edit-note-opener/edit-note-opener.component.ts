import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterService } from '../service/router.service';
import { ActivatedRoute, Params } from '@angular/router';
import { EditNoteViewComponent } from '../edit-note-view/edit-note-view.component';

@Component({
  selector: 'app-edit-note-opener',
  templateUrl: './edit-note-opener.component.html',
  styleUrls: ['./edit-note-opener.component.css']
})
export class EditNoteOpenerComponent {

  noteId:number=0;

  constructor(
    private dialog:MatDialog,
    private activatedroute:ActivatedRoute,
    private routerService:RouterService)
  {

    this.activatedroute.params.subscribe((params:Params) => { console.log("From Param "+params['noteid'])})
    this.activatedroute.params.subscribe((params:Params) => this.noteId = +params["noteid"])

    console.log("Opener Display ",this.noteId);

    this.dialog.open(EditNoteViewComponent,{
      data:{
        noteId:this.noteId,
      }
    }).afterClosed().subscribe(result =>{
      this.routerService.routeToNotes();
    })
  }


}
