import React, { FC } from "react";
import Filter from "../controls/filter/Filter";
import Search from "../search/Search";
import { TypeNameBtnGroups } from "../../common/enum/enum";
import { TBtn } from "../../common/interfaces/interfaces";

type Props = {
    title: TypeNameBtnGroups,
    btns: TBtn[],
    onFilter: (value: string) => void
}
type Component = FC<Props>;


const MoviesSearch: Component = ({ title, btns, onFilter }) => (
    <div data-movies-search="moviesSearch" className="movies-search">
        <div className="movies-search__title">
            Find your movie
        </div>
        <div className="movies-search__search">
            <Search/>
        </div>
        <div className="movies-search__search-by">
            <Filter
                title={title}
                btns={btns}
                onFilter={onFilter}
            />
        </div>
    </div>
)

export default MoviesSearch;
