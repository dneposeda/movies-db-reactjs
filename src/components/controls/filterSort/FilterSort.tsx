import React, {FC} from "react";
import GropsBtn from "../../groupBtns/GropsBtns";
import { TypeNameBtnGroups } from '../../../enum/enum';

interface Props {
    type: TypeNameBtnGroups
}
type Component = FC<Props>;

const FilterSort: Component = ({ type }) => {
    const btnNames = {
        sort: ['release date', 'rating'],
        search: ['title', 'gengre'],
    };

    return (
        <>
            <div className="filter-sort">
                <div className="filter-sort__title">{ type } by</div>
                <div className="filter-sort__controls">
                    <GropsBtn btnNames={ btnNames[type] } />
                </div>
            </div>
        </>
    );
}

export default FilterSort;
