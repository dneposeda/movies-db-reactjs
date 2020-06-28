import { actionTypes } from "../actions/actionTypes";

export default (state = null, action) => {
    switch (action.type) {
        case actionTypes.FILM_SELECTED:
            return action.payload;
        default:
            return state;
    }
}
