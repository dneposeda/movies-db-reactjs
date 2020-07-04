import { actionTypes } from "../actions/actionTypes";
import { TypeSearch } from "../../common/enum/enum";

const initialState = TypeSearch.TITLE;

export default (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_SEARCH_CRITERIA:
            return action.payload;
        default:
            return state;
    }
}
