import * as commentsAction from '../actions/comments';
import { Comment } from '../../models/comment';

export interface CommentsState {
    allComments: Comment[];
    selectedFilmId: number;
    currentFilmsIds: number[];
}

export const initialState: CommentsState = {
    allComments: [
        {
            id: 1,
            filmId: 1,
            description: 'Комментарий №1 к фильму Interstellar',
            author: 'Alex_Kulikov'
        },
        {
            id: 2,
            filmId: 2,
            description: 'Комментарий №1 к фильму Shutter Island',
            author: 'Alex_Kulikov'
        },
        {
            id: 3,
            filmId: 3,
            description: 'Комментарий №1 к фильму The Grand Budapest Hotel',
            author: 'Alex_Kulikov'
        },
        {
            id: 4,
            filmId: 1,
            description: 'Комментарий №2 к фильму Interstellar',
            author: 'Kuli_Alexov'
        },
        {
            id: 5,
            filmId: 2,
            description: 'Комментарий №2 к фильму Shutter Island',
            author: 'Alex_Kulikov'
        },
        {
            id: 6,
            filmId: 1,
            description: 'Комментарий №3 к фильму Interstellar',
            author: 'Alex_Kulikov'
        }
    ],
    selectedFilmId: 1,
    currentFilmsIds: [1, 4, 6]
};

export function reducer(
    state: CommentsState = initialState,
    action: commentsAction.CommentsAction
) {
    switch (action.type) {
        case commentsAction.ADD_COMMENT: {
            // const comment: Comment = action.payload;
            console.log(action);
            console.log('ADD_COMMENT');
            return {
                ...state
            };
        }
        case commentsAction.DELETE_COMMENT: {
            console.log(action);
            console.log('DELETE_COMMENT');
            return {
                ...state
            };
        }
        default:
            return state;
    }
}

export const getAllComments = (state: CommentsState) => state.allComments;
