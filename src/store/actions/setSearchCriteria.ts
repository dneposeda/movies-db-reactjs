import { actionTypes } from "./actionTypes";
import { TypeSearch } from "../../common/enum/enum";

export const setSearchCriteria = (type: TypeSearch) => ({
    type: actionTypes.SET_SEARCH_CRITERIA,
    payload: type,
});
