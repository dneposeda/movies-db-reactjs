import { actionTypes } from "../actions/actionTypes";

export const initialState = {
    films: [],
}

const films = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_FILMS:
            return { ...state, films: action.payload };
        case actionTypes.SEARCH_FILMS:
                return { ...state, films: action.payload };
        default:
            return state;
    }
}

export default films;
