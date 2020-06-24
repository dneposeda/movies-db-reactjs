import React from 'react';
import Header from './Header';

describe('Header', () => {
    it('renders correctly', () => {
        const component = mount (
            <Header />
        );
        expect(component).toMatchSnapshot();
        expect(component.find('.logo')).toHaveLength(1);
    });
});
