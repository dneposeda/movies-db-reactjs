import { actionTypes } from "./actionTypes";

export const searchFilmsType = (type) => {
    return {
        type: actionTypes.SET_TYPE_SEARCH,
        payload: type,
    }
};
