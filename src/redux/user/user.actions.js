import {UserActionTypes} from './user.types';

export const setCuurentUser = user => ({
    type: UserActionTypes.SET_CUURENT_USER,
    payload: user
});