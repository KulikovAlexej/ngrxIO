import { Action } from '@ngrx/store';
import { Comment } from '../../models/comment';
import { Film } from '../../models/film';

// export { Comment } from '../../models/comment';

export const ADD_COMMENT = '[Comments] Add';
export const DELETE_COMMENT = '[Comments] Delete';
export const SELECT_FILM = '[Comments] Select Film';

export class AddComment implements Action {
    readonly type = ADD_COMMENT;
    constructor(public payload: Comment) {}
}

export class DeleteComment implements Action {
    readonly type = DELETE_COMMENT;
    constructor(public payload: Comment) {}
}

export class SelectFilm implements Action {
    readonly type = SELECT_FILM;
    constructor(public payload: number) {}
}

export type CommentsAction = AddComment | DeleteComment | SelectFilm;
