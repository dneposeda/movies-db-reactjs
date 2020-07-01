import { actionTypes } from "../actions/actionTypes";

export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.FETCH_FILM:
            return action.payload;
        default:
            return state;
    }
}
