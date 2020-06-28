import { actionTypes } from "./actionTypes";

export const sortByRating = (films) => {
    return {
        type: actionTypes.SORT_BY_RATING,
        payload: films.sort(compare),
    }
};
function compare(a, b) {
    return b.vote_average - a.vote_average;
}