import { actionTypes } from "./actionTypes";
import { TypeSort } from "../../common/enum/enum";

export const sortFilms = (sortType: TypeSort) => ({
    type: actionTypes.SORT_FILMS,
    payload: sortType,
});