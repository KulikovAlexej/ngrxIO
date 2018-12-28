import { createSelector, ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromScoreboard from './scoreboard.reducer';

export const reducers: ActionReducerMap<any> = {
    scoreboard: fromScoreboard.scoreboardReducer
};

export const getScoreboardState = createFeatureSelector<any>('');

