import * as commentsAction from '../actions/comments';
import { Comment } from '../../models/comment';

export interface CommentsState {
    allComments: Comment[];
    selectedFilmId: number;
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
    selectedFilmId: null
};

export function reducer(
    state: CommentsState = initialState,
    action: commentsAction.CommentsAction
) {
    switch (action.type) {
        case commentsAction.ADD_COMMENT: {
            const comment: Comment = action.payload;
            return {
                ...state,
                allComments: [...state.allComments, comment]
            };
        }
        case commentsAction.DELETE_COMMENT: {
            const deletedComment: Comment = action.payload;
            return {
                ...state,
                allComments: state.allComments.filter(comment => comment.id !== deletedComment.id)
            };
        }
        case commentsAction.SELECT_FILM: {
            const filmId: number = action.payload;
            return {
                ...state,
                selectedFilmId: filmId
            };
        }
        default:
            return state;
    }
}

export const getAllComments = (state: CommentsState) => state.allComments;
export const getFilmId = (state: CommentsState) => state.selectedFilmId;
// export const getCommentsByFilm = (state: CommentsState) => state.allComments.filter(comment => comment.filmId === state.selectedFilmId);
