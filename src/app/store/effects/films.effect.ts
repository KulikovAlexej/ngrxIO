import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as filmActions from '../actions/films';
import * as commentActions from '../actions/comments';
import { tap, filter, mapTo, mergeMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';

@Injectable()
export class FilmEffects {
    constructor(
        private actions$: Actions
    ) {}

    @Effect()
    switchFilm$ = this.actions$.pipe(
        ofType(filmActions.SELECT),
        // tap(action => console.log(action)),
        mergeMap((action: filmActions.Select) => of(new commentActions.SelectFilm(action.payload)))
    );
}
