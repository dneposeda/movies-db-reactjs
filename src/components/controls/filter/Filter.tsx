import React, { FC } from "react";
import ButtonsGroup from "../../ButtonsGroup/ButtonsGroup";
import { TBtn } from "../../../common/interfaces/interfaces";
import { TypeNameBtnGroups } from '../../../common/enum/enum';

type Props = {
    btns: TBtn[],
    title: TypeNameBtnGroups,
    onFilter: (filterBy: TBtn['id']) => void,
}
type Component = FC<Props>;

const Filter: Component = ({ btns, title, onFilter }) => {
    const classesBtn = ['btn', 'filter-sort__btn'];

    return (
        <div className="filter-sort">
            <div className="filter-sort__title">{`${title} by`}</div>
            <div className="filter-sort__controls">
                <ButtonsGroup
                    btns={ btns }
                    cls={ classesBtn }
                    useCallback={ onFilter }
                />
            </div>
        </div>
    );
}

export default Filter;
