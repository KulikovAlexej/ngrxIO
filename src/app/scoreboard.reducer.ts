import * as Scoreboard from './scoreboard-page.actions';


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
            console.log('IncrementHome');
            return {
                ...state,
                home: state.home + 1
            };
        case Scoreboard.ActionTypes.IncrementAway:
            console.log('IncrementAway');
            return {
                ...state,
                away: state.away + 1
            };
        case Scoreboard.ActionTypes.Reset:
            console.log('Reset');
            return action.payload;
        default:
            console.log('hmmm');
            return state;
    }
}


