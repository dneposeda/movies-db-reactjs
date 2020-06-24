import React from 'react';
import Btn from './Btn';
import { TypeSort } from '../../../enum/enum'
import { mount } from 'enzyme';

const mockBnt = {
    title: TypeSort.DATE,
    cls: '',
    active: true,
    handleClick: () => true,
}

describe('Btn', () => {
    it('renders correctly', () => {
        const component = mount (
            <Btn
                title={mockBnt.title}
                cls={mockBnt.cls}
                active={mockBnt.active}
                handleClick={mockBnt.handleClick}
            />
        );
        const title = component.find('[type="button"]');

        expect(component).toMatchSnapshot();
        expect(component.find('.active')).toHaveLength(1);
        expect(title.text(mockBnt.title)).toEqual(TypeSort.DATE);
    });
});
