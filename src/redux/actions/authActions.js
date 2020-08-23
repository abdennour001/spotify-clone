import { LOGIN_SUCCESS, USER_LOADED, LOGOUT, SET_LOADING } from "../types";

export const loginUser = token => {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            token
        }
    };
};

export const loadUser = user => {
    return {
        type: USER_LOADED,
        payload: {
            user
        }
    };
};

export const logout = () => {
    return {
        type: LOGOUT
    };
};

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};
