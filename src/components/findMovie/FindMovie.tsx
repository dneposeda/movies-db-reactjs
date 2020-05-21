import React from "react";
import Search from "../search/Search";
import FilterSort from "../controls/filterSort/FilterSort";
import { TypeNameBtnGroups } from '../../enum/enum';

const FindMovie = () => (
    <div className="find-movie">
        <div className="find-movie__title">
            Find your movie
        </div>
        <div className="find-movie__search">
            <Search/>
        </div>
        <div className="find-movie__search-by">
            <FilterSort type={TypeNameBtnGroups.SEARCH}/>
        </div>
    </div>
)

export default FindMovie;
