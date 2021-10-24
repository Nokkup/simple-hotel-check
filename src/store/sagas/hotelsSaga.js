import { takeEvery, call, put } from "redux-saga/effects";
import { GET_HOTELS } from "../actionTypes";
import { getHotels } from "../../api";
import { HotelsActionCreators } from "../actions/hotelsActions";
import { QueryActionCreators } from "../actions/queryActions";
import { newQuery } from "../../utils/query";


function* fetchHotels({ payload }) {
    try {
        const query = newQuery(payload);
        const hotels = yield call(getHotels, query);
        yield put(HotelsActionCreators.setHotels(hotels.data));
        yield put(QueryActionCreators.setQueryParams(query));
    } catch (error) {
        console.error(error);
    }
}

export function* watchFetchHotels() {
    yield takeEvery(GET_HOTELS, fetchHotels);
}
