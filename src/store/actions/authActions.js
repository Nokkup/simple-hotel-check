import { SET_AUTH } from "../actionTypes";

export const AuthActionCreators = {
    login: () => {
        localStorage.setItem("auth", true);
        return { type: SET_AUTH, payload: true };
    },

    logout: () => {
        localStorage.removeItem("auth");
        return { type: SET_AUTH, payload: false };
    },

    signIn: () => {
        const isAuth = localStorage.getItem("auth") ?? false;
        return { type: SET_AUTH, payload: isAuth };
    }
};
