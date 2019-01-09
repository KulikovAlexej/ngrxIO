import { Action } from '@ngrx/store';

export { Comment } from '../../models/comment';

export const ADD_COMMENT = '[Comments] Add';
export const DELETE_COMMENT = '[Comments] Delete';

export class AddComment implements Action {
    readonly type = ADD_COMMENT;
    constructor(public payload: Comment) {}
}

export class DeleteComment implements Action {
    readonly type = DELETE_COMMENT;
    constructor(public payload: Comment) {}
}

export type CommentsAction = AddComment | DeleteComment;
