import { actionTypes } from "../actions/actionTypes";

export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.FETCH_FILM:
            return { ...state, film: action.payload };
        default:
            return state;
    }
}
