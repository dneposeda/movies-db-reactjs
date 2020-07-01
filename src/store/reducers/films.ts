import orderBy from 'lodash.orderby';
import { actionTypes } from "../actions/actionTypes";

export const initialState = [];

const films = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_FILMS:
            return action.payload;
        case actionTypes.SEARCH_FILMS:
            return action.payload;
        case actionTypes.SORT_FILMS:
            return orderBy(state, action.payload, 'desc');
        default:
            return state;
    }
}

export default films;
