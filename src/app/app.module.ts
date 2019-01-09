import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { FilmSelectedComponent } from './components/film-selected/film-selected.component';

import { reducers, metaReducers } from './store/reducers';
import { CommentsComponent } from './components/comments/comments.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmItemComponent,
    FilmSelectedComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
