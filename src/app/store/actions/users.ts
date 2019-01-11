import { Action } from '@ngrx/store';
import { IUser } from '../../models';
import { HttpErrorResponse } from '@angular/common/http';

export namespace UserActions {
    export const USERS_LOADING = '[Users] Users Loading';
    export const USERS_FAILED = '[Users] Users Failed';
    export const USERS_SUCCESS = '[Users] Users Success';
    export const SELECT_USER = '[Users] Select User';
}

export class UsersLoading implements Action {
    readonly type = UserActions.USERS_LOADING;
}

export class UsersFailed implements Action {
    readonly type = UserActions.USERS_FAILED;
    constructor(
        public payload: HttpErrorResponse
    ) {}
}

export class UsersSuccess implements Action {
    readonly type = UserActions.USERS_SUCCESS;
    constructor(
        public payload: IUser[]
    ) {}
}

export class SelectUser implements Action {
    readonly type = UserActions.SELECT_USER;
    constructor(
        public payload: IUser
    ) {}
}



export type UserActionsType = UsersLoading | UsersFailed | UsersSuccess | SelectUser;
