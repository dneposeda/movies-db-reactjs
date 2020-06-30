import { actionTypes } from "../actions/actionTypes";

const initialState = 'title';

export default (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_SEARCH_CRITERIA:
            return action.payload;
        default:
            return state;
    }
}
