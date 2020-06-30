import { actionTypes } from "./actionTypes";

export const setSearchCriteria = type => ({
    type: actionTypes.SET_SEARCH_CRITERIA,
    payload: type,
});
