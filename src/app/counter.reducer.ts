import { Action } from '@ngrx/store';
import { ActionTypes } from './counter.action';

export const initialState = 0;

export function counterReducer(state = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.Increment:
            // console.log(initialState);
            return state + 1;

        case ActionTypes.Decrement:
            // console.log(initialState);
            return state - 1;

        case ActionTypes.Reset:
            // console.log(initialState);
            return 0;

        default:
            // console.log(initialState);
            return state;
    }
}

