import React, { FC } from "react";
import {TypeNameBtnGroups} from '../../../enum/enum';
import {TBtn} from "../../../interfaces/interfaces";
import GropBtns from "../../groupBtns/GropsBtns";

interface Props {
    btns: TBtn[],
    title: TypeNameBtnGroups,
    onFilter: (filterBy: TBtn['id']) => void,
}
type Component = FC<Props>;

const FilterSort: Component = ({ btns, title, onFilter }) => {
    const classesBtn = ['btn', 'filter-sort__btn'];

    return (
        <div className="filter-sort">
            <div className="filter-sort__title">{`${title} by`}</div>
            <div className="filter-sort__controls">
                <GropBtns
                    btns={ btns }
                    cls={ classesBtn }
                    onClick={ onFilter }
                />
            </div>
        </div>
    );
}

export default FilterSort;
