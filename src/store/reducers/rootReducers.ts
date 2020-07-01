import { combineReducers } from "redux";
import films from './films';
import searchCriteria from './searchCriteria';
import selectedFilm from './selectedFilm';

const rootReducer = combineReducers({
    films,
    searchCriteria,
    selectedFilm,
});

export default rootReducer;


