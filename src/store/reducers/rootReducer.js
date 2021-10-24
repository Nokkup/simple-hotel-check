import { combineReducers } from "redux";

import { hotelsReducer as hotels } from "./hotelsReducer";
import { queryReducer as query } from "./queryReducer";
import { imagesReducer as images } from "./imagesReducer";
import { authReducer as auth } from "./authReducer";

const reducers = {
    hotels,
    query,
    images,
    auth,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
