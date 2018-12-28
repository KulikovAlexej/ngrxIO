import * as Scoreboard from './scoreboard-page.actions';
import { createSelector } from '@ngrx/store';


export const initialState: Scoreboard.ScoreboardState = {
    home: 0,
    away: 0
};

export function scoreboardReducer(
    state = initialState,
    action: Scoreboard.ActionsUnion
): Scoreboard.ScoreboardState {
    switch (action.type) {
        case Scoreboard.ActionTypes.IncrementHome:
            return {
                ...state,
                home: state.home + 1
            };
        case Scoreboard.ActionTypes.IncrementAway:
            return {
                ...state,
                away: state.away + 1
            };
        case Scoreboard.ActionTypes.Reset:
            return action.payload;
        default:
            return state;
    }
}

export const getHome = (state: Scoreboard.ScoreboardState) => state.home;
export const getAway = (state: Scoreboard.ScoreboardState) => state.away;
export const getScoreboard = (state: Scoreboard.ScoreboardState) => state;

export const commonReducers = {
    getScoreboard,
    getHome,
    getAway,
    scoreboardReducer
};



