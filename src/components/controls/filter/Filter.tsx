import React, { FC } from "react";
import ButtonsGroup from "../../ButtonsGroup/ButtonsGroup";
import { TBtn } from "../../../common/interfaces/interfaces";
import { TypeNameBtnGroups, TypeSearch, TypeSort } from '../../../common/enum/enum';

type Props = {
    btns: TBtn[],
    title: TypeNameBtnGroups,
    onFilter: (filterBy: TBtn['id']) => void,
    defaultCriteria?: TypeSearch | TypeSort,
}
type Component = FC<Props>;

const Filter: Component = ({ btns, title, onFilter, defaultCriteria }) => {
    const classesBtn = ['btn', 'filter-sort__btn'];

    return (
        <div className="filter-sort">
            <div className="filter-sort__title">{`${title} by`}</div>
            <div className="filter-sort__controls">
                <ButtonsGroup
                    btns={ btns }
                    cls={ classesBtn }
                    useCallback={ onFilter }
                    defaultActiveButton={defaultCriteria}
                />
            </div>
        </div>
    );
}

export default Filter;
