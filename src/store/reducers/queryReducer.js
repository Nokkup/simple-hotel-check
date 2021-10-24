import { getCurrentDate } from "../../utils/date";
import { SET_QUERY } from "../actionTypes";

const initialState = {
    query: {
        location: "Москва",
        lang: "ru",
        currency: "rub",
        limit: 20,
        daysCount: 1,
        checkIn: getCurrentDate("YYYY-MM-DD"),
        checkOut: "",
    },
};

export function queryReducer(state = initialState, action) {
    switch (action.type) {
        case SET_QUERY:
            return { ...state, query: action.payload };
        default:
            return state;
    }
}
