import { actionTypes } from './actionTypes';
import { URL } from './action';

export const searchFilms = (searchText, searchBy) => {
    if (!searchText) return;
    console.log('searchFilms', searchText, searchBy);

    return (
        (dispatch) => (
            fetch(
                `${URL}/movies?search=${searchText}&searchBy=${searchBy}`,
                {
                    method: 'GET',
                    headers: new Headers({ 'content-type': 'application/json' })
                })
                .then(response => response.json())
                .then(response => {
                    dispatch({
                        type: actionTypes.SEARCH_FILMS,
                        payload: response.data
                    })
                })
        )
    )
}

