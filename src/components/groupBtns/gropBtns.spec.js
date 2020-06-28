import React from 'react';
import GropBtns from './GropsBtns';
import { shallow } from 'enzyme';
import Btn from '../controls/btn/Btn';
import { TypeNameBtnGroups, TypeSort } from '../../enum/enum'

const mockBtns = {
    btns: [
        { id: 1, title: TypeSort.DATE, active: true },
        { id: 2, title: TypeSort.RATING, active: false },
    ],
    classesBtn: ['btn', 'filter-sort__btn'],
    titleGroup: TypeNameBtnGroups.SORT,
    handleClickBtn: () => {},
}

describe('GropBtns', () => {
    it('renders correctly', () => {
        const component = mount (
            <GropBtns
                btns={ mockBtns.btns }
                cls={ mockBtns.classesBtn }
                group={ mockBtns.titleGroup }
                handleClickBtn={ mockBtns.handleClickBtn }
            />
        );

        expect(component).toMatchSnapshot();
        expect(component.find(Btn)).toHaveLength(2);
    });
});
