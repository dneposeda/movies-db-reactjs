import { actionTypes } from './actionTypes';
import { URL } from './action';
import { TypeSearch } from '../../common/enum/enum';
import { handleErrors } from './common';

export const searchFilms = (searchText: string, searchBy: TypeSearch) => (
        (dispatch) => (
            fetch(
                `${URL}/movies?search=${searchText}&searchBy=${searchBy}`,
                {
                    method: 'GET',
                    headers: new Headers({ 'content-type': 'application/json' })
                })
                .then(handleErrors)
                .then(response => response.json())
                .then(response => {
                    dispatch({
                        type: actionTypes.SEARCH_FILMS,
                        payload: response.data
                    })
                })
                .catch(() => console.log('Что-то пошло не так'))
        )
    )
