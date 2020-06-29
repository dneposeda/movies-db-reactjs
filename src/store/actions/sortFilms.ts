import { actionTypes } from "./actionTypes";

export const sortFilms = sortType => ({
    type: actionTypes.SORT_FILMS,
    payload: sortType,
});