import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as userActions from '../actions/users';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { PlaceholdersService } from '../../services/placeholders.service';
import { IUser } from '../../models';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class UsersEffects {
    constructor(
        private actions$: Actions,
        private placeholderService: PlaceholdersService
    ) {}

    @Effect()
    switchFilm$ = this.actions$.pipe(
        ofType(userActions.UserActions.USERS_LOADING),
        mergeMap((action: userActions.UsersLoading) => {
            return this.placeholderService.getUsers().pipe(
                map((users: IUser[]) => new userActions.UsersSuccess(users)),
                catchError((error: HttpErrorResponse) => of(new userActions.UsersFailed(error)))
            );
        }),
    );
}
