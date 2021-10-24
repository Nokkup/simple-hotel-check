import { SET_AUTH } from "../actionTypes";

const initialState = {
    user: {
        isAuth: false,
    },
};

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_AUTH:
            return { ...state, user: { isAuth: action.payload } };
        default:
            return state;
    }
}
