import * as usersAction from '../actions/users';
import { IUser, ITodo } from '../../models';
import { HttpErrorResponse } from '@angular/common/http';

export interface UsersState {
    users: IUser[];
    selectedUser: IUser;
    loading: boolean;
    loaded: boolean;
    todos: ITodo[];
}

export const initalState: UsersState = {
    users: [],
    selectedUser: null,
    loading: false,
    loaded: false,
    todos: []
};

export function reducer(
    state = initalState,
    action: usersAction.UserActionsType
) {
    switch (action.type) {
        case usersAction.UserActions.USERS_LOADING: {
            return {
                ...state,
                loading: true
            };
        }
        case usersAction.UserActions.USERS_SUCCESS: {
            const users: IUser[] = action.payload;
            return {
                ...state,
                loading: false,
                loaded: true,
                users
            };
        }
        case usersAction.UserActions.USERS_FAILED: {
            const error: HttpErrorResponse = action.payload;
            return {
                ...state,
                loading: false,
                loaded: false,
            };
        }
        case usersAction.UserActions.SELECT_USER: {
            const user: IUser = action.payload;
            return {
                ...state,
                selectedUser: user
            };
        }
        default:
            return state;
    }
}

export const getLoadingStatus = (state: UsersState) => state.loading;
export const getUsers = (state: UsersState) => state.users;
export const getLoadedStatus = (state: UsersState) => state.loaded;
export const getSelectedUser = (state: UsersState) => state.selectedUser;
