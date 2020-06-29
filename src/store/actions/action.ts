import { actionTypes } from "./actionTypes";

export const URL = 'https://reactjs-cdp.herokuapp.com';

export const fetchFilms = () => (
    (dispatch) => (
        fetch(
            `${URL}/movies?sortBy=date`,
            {
                method: 'GET',
                headers: new Headers({ 'content-type': 'application/json' })
            })
            .then(response => response.json())
            .then(response => {
                dispatch({
                    type: actionTypes.FETCH_FILMS,
                    payload: response.data
                })
            })
    )
)

export const fetchFilmData = (id) => {
    return (
        (dispatch) => (
            fetch(
                `${URL}/movies/${ id }`,
                {
                    method: 'GET',
                    headers: new Headers({ 'content-type': 'application/json' })
                })
                .then(response => response.json())
                .then(response => {
                    dispatch({
                        type: actionTypes.FETCH_FILM,
                        payload: response
                    })
                })
        )
    )
}
