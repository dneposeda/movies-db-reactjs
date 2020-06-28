import { actionTypes } from "../actions/actionTypes";

export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.SORT_BY_RATING:
            return { ...state, films: action.payload }
        default:
            return state;
    }
}
