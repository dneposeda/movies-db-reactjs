import { combineReducers } from "redux";
import films from './films';
import sortByRating from './sortByRating';
import sortByDate from './sortByDate';
// import searchFilms from './123searchFilms';
import searchFilmsType from './searchFilmsType';

const rootReducer = combineReducers({
    films,
    // searchFilms,
    // selectedFilm: SelectedFilm,
    sortByRating,
    sortByDate,
    searchFilmsType,
});

export default rootReducer;


