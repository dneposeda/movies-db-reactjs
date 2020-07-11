import { actionTypes, setActiveFilm, handleErrors } from ".";

export const URL = 'https://reactjs-cdp.herokuapp.com';

export const fetchFilms = () => (
    (dispatch) => (
        fetch(
            `${URL}/movies?sortBy=date`,
            {
                method: 'GET',
                headers: new Headers({ 'content-type': 'application/json' })
            })
            .then(handleErrors)
            .then(response => response.json())
            .then(response => {
                dispatch({
                    type: actionTypes.FETCH_FILMS,
                    payload: response.data
                })
            })
            .catch(() => console.log('Что-то пошло не так'))
    )
)

export const fetchFilmData = (id: number) => (
    (dispatch) => (
        fetch(
            `${URL}/movies/${ id }`,
            {
                method: 'GET',
                headers: new Headers({ 'content-type': 'application/json' })
            })
            .then(handleErrors)
            .then(response => response.json())
            .then(response => {
                dispatch(setActiveFilm(response))
            })
            .catch(() => console.log('Что-то пошло не так'))
    )
)
