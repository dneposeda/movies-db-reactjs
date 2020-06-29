import { combineReducers } from "redux";
import films from './films';
import searchCriteria from './searchCriteria';

const rootReducer = combineReducers({
    films,
    searchCriteria,
});

export default rootReducer;


