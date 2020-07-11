import { actionTypes } from "../actions/actionTypes";

export default (state = null, action) => {
    switch (action.type) {
        case actionTypes.SET_ACTIVE_FILM:
            return action.payload;
        default:
            return state;
    }
}
