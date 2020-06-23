import React, {FC} from "react";
import {TypeNameBtnGroups} from '../../../enum/enum';
import {IBtn} from "../../../interfaces/interfaces";
import GropBtns from "../../groupBtns/GropsBtns";

interface Props {
    type: { titleGroup: TypeNameBtnGroups, btns: IBtn[] }
}
type Component = FC<Props>;

const FilterSort: Component = ({ type }) => {
    const { titleGroup, btns } = type;
    const classesBtn = ['btn', 'filter-sort__btn'];

    return (
        <div className="filter-sort">
            <div className="filter-sort__title">{ titleGroup } by</div>
            <div className="filter-sort__controls">
                <GropBtns
                    btns={ btns }
                    cls={ classesBtn }
                    group={ titleGroup }
                />
            </div>
        </div>
    );
}

export default FilterSort;
