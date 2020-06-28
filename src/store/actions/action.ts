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
                console.log("filmList: ", response);
                dispatch({
                    type: actionTypes.FETCH_FILMS,
                    payload: response.data
                })
            })
    )
)
