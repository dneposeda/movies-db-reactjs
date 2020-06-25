import React from "react";
import Search from "../search/Search";
import FilterSort from "../controls/filterSort/FilterSort";

const FindMovie = ({ type }) => (
    <div data-find="findMovie" className="find-movie">
        <div className="find-movie__title">
            Find your movie
        </div>
        <div className="find-movie__search">
            <Search/>
        </div>
        <div className="find-movie__search-by">
            <FilterSort type={ type }/>
        </div>
    </div>
)

export default FindMovie;
