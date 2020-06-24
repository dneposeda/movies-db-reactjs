import React from 'react';
import Footer from './Footer';
import { mount } from 'enzyme';

describe('Footer', () => {
    it('renders correctly', () => {
        const component = mount (
            <Footer />
        );
        expect(component).toMatchSnapshot();
        expect(component.find('.logo')).toHaveLength(1);
    });
});
