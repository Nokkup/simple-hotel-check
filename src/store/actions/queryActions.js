import { SET_QUERY } from "../actionTypes";

export const QueryActionCreators = {
    setQueryParams: (query) => {
        return { type: SET_QUERY, payload: query };
    },
};
