import {
    ADD_HOTEL_IN_SELECTED,
    DELETE_HOTEL_FROM_SELECTED,
    SET_HOTELS,
    SET_SELECTED_HOTELS,
} from "../actionTypes";

export const HotelsActionCreators = {
    setHotels: (hotels) => {
        return { type: SET_HOTELS, payload: hotels };
    },

    setSelectedHotels: (selectedHotels) => {
        return { type: SET_SELECTED_HOTELS, payload: selectedHotels };
    },

    addHotelInSelected: (hotel) => {
        return { type: ADD_HOTEL_IN_SELECTED, payload: hotel };
    },

    deleteHotelFromSelected: (hotel) => {
        return {type: DELETE_HOTEL_FROM_SELECTED, payload: hotel}
    }
};
