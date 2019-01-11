import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from './models/film';
import { Store, select } from '@ngrx/store';

import * as fromRoot from './store/reducers';
import * as filmAction from './store/actions/films';
import * as commentAction from './store/actions/comments';
import * as usersAction from './store/actions/users';
import { Comment } from './models/comment';
import { UsersState } from './store/reducers/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  films$: Observable<Film[]>;
  selected$: Observable<any>;
  comments$: Observable<any>;


  constructor(private store: Store<fromRoot.State>) {
    this.films$ = store.pipe(select(fromRoot.getAllFilms));
    this.selected$ = store.pipe(select(fromRoot.getSelectedFilm));
    this.comments$ = store.pipe(select(fromRoot.getCurrentComments));
  }
  onSelect(id: number) {
    this.store.dispatch(new filmAction.Select(id));
  }

  deleteComment(comment) {
    this.store.dispatch(new commentAction.DeleteComment(comment));
  }

  ngOnInit() {
    const comment: Comment = {
        id: 7,
        filmId: 1,
        description: 'Комментарий №4 к фильму Interstellar',
        author: 'Alex_Kulikov'
    };
    this.store.dispatch(new commentAction.AddComment(comment));
    this.store.dispatch(new usersAction.UsersLoading());
  }
}
