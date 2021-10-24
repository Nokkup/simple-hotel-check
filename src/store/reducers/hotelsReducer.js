import {
    ADD_HOTEL_IN_SELECTED,
    SET_HOTELS,
    SET_SELECTED_HOTELS,
    DELETE_HOTEL_FROM_SELECTED,
} from "../actionTypes";

const initialState = {
    hotels: [],
    selectedHotels: [],
};

export function hotelsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_HOTELS:
            return { ...state, hotels: action.payload };
        case SET_SELECTED_HOTELS:
            return { ...state, selectedHotels: action.payload };
        case ADD_HOTEL_IN_SELECTED:
            return {
                ...state,
                selectedHotels: [...state.selectedHotels, action.payload],
            };
        case DELETE_HOTEL_FROM_SELECTED:
            return {
                ...state,
                selectedHotels: state.selectedHotels.filter(
                    (hotel) => hotel.hotelId !== action.payload.hotelId
                ),
            };
        default:
            return state;
    }
}
