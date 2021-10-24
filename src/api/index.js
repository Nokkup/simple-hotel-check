import axios from "axios";

const API_URL = "https://engine.hotellook.com/api/v2/cache.json";

export async function getHotels(query) {
    return axios.get(API_URL, {
        params: {
            location: query.location,
            lang: query.lang,
            currency: query.currency,
            checkIn: query.checkIn,
            checkOut: query.checkOut,
            limit: query.limit,
            token: process.env.REACT_APP_TOKEN,
        },
    });
}