import {
    ActionReducerMap, createSelector, createFeatureSelector,
    ActionReducer, MetaReducer
} from '@ngrx/store';

import * as fromFilms from './films';
import * as fromComments from './comments';

export interface State {
    films: fromFilms.FilmsState;
    comments: fromComments.CommentsState;
}

export const reducers: ActionReducerMap<State> = {
    films: fromFilms.reducer,
    comments: fromComments.reducer
};

export function logger(reducer: ActionReducer<State>):
    ActionReducer<State> {
    return function (state: State, action: any): State {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}
export const metaReducers: MetaReducer<State>[] = [logger];

export const getFilmState = createFeatureSelector<fromFilms.FilmsState>('films');
export const getCommentsState = createFeatureSelector<fromComments.CommentsState>('comments');

export const getIds = createSelector(
    getFilmState,
    fromFilms.getIds,
);
export const getFilms = createSelector(
    getFilmState,
    fromFilms.getFilms,
);
export const getSelected = createSelector(
    getFilmState,
    fromFilms.getSelected,
);
export const getSelectedFilm = createSelector(
    getSelected,
    getFilms,
    (selectedId, films) => {
        return {
            ...films[selectedId]
        };
    }
);

export const getAllFilms = createSelector(
    getIds,
    getFilms,
    (ids, films) => {
        return ids.map(id => films[id]);
    }
);

export const getAllComments = createSelector(
    getCommentsState,
    fromComments.getAllComments
);

export const getCurrentFilmId = createSelector(
    getCommentsState,
    fromComments.getFilmId
);

export const getCurrentComments = createSelector(
    getCurrentFilmId,
    getAllComments,
    (id, comments) => {
        return comments.filter(comment => comment.filmId === id);
    }
);
