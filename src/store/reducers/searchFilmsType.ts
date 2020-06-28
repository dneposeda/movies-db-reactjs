import { actionTypes } from "../actions/actionTypes";

const initialState = {
    searchType: 'title',
};

export default (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_TYPE_SEARCH:
            return { ...state, searchType: action.payload };
        default:
            return state;
    }
}
