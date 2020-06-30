import React from "react";
import Search from "../search/Search";
import FilterSort from "../controls/filterSort/FilterSort";

const FindMovie = ({ title, btns, onFilter }) => (
    <div data-find="findMovie" className="find-movie">
        <div className="find-movie__title">
            Find your movie
        </div>
        <div className="find-movie__search">
            <Search/>
        </div>
        <div className="find-movie__search-by">
            <FilterSort
                title={title}
                btns={btns}
                onFilter={onFilter}
            />
        </div>
    </div>
)

export default FindMovie;
