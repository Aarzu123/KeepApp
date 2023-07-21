import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MymoduleComponent } from './mymodule/mymodule.component';
import { StudentComponent } from './student/student.component';
import { StdTitlePipe } from './std-title.pipe';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavHeaderComponent } from './side-nav-header/side-nav-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoteComponent } from './note/note.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoteTakerComponent } from './note-taker/note-taker.component';
import { NotesViewComponent } from './notes-view/notes-view.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EditNoteOpenerComponent } from './edit-note-opener/edit-note-opener.component';
import { EditNoteViewComponent } from './edit-note-view/edit-note-view.component';


@NgModule({
  declarations: [
    AppComponent,
    MymoduleComponent,
    StudentComponent,
    StdTitlePipe,
    HeaderComponent,
    CarouselComponent,
    SideNavHeaderComponent,
    LoginComponent,
    NoteComponent,
    DashboardComponent,
    NoteTakerComponent,
    NotesViewComponent,
    EditNoteOpenerComponent,
    EditNoteViewComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatExpansionModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
