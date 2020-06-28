import { actionTypes } from "./actionTypes";

export const sortByDate = (films) => {
    return {
        type: actionTypes.SORT_BY_DATE,
        payload: films.sort(compare),
    }
};
function compare(a, b) {
    if (a.release_date > b.release_date) {
        return 1;
    }
    if (a.release_date < b.release_date) {
        return -1;
    }
    return 0;
}