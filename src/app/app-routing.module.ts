import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NoteComponent } from './note/note.component';
import { canactivateGuard } from './guard/canactivate.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotesViewComponent } from './notes-view/notes-view.component';
import { EditNoteOpenerComponent } from './edit-note-opener/edit-note-opener.component';

const routes: Routes = [


  {path:'',redirectTo:"login",pathMatch:"full"},
  {path:'login',component:LoginComponent},
  {path:'note',component:DashboardComponent, canActivate:[canactivateGuard],
    children:[

      {path:'',redirectTo:"view/notesview",pathMatch:"full"},
      {path:'view/notesview',component:NotesViewComponent},
      {path:'note/:noteid/edit',component:EditNoteOpenerComponent,outlet:'noteEditOutlet'},

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
