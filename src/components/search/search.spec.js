import React from 'react';
import Search from './Search';

describe('Search', () => {
    it('renders correctly', () => {
        const component = mount (
            <Search />
        );
        expect(component).toMatchSnapshot();
    });
});
