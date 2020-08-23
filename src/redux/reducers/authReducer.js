import { LOGIN_SUCCESS, USER_LOADED, LOGOUT, SET_LOADING } from "../types";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            };

        default:
            return state;
    }
};
