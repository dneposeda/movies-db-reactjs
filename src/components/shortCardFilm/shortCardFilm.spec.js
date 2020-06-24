import React from 'react';
import ShortCartFilm from './ShortCardFilm';
import { mount } from 'enzyme';

const mockData = {
    genre: "Oscar winning Movie",
    id: 2,
    img: "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
    title: "Reservoir Reservoir",
    year: 2019,
}

describe('ShortCartFilm', () => {
    it('renders correctly', () => {
        const component = mount (
            <ShortCartFilm film={ mockData }/>
        );
        const title = component.find('.card-film__title')

        expect(component).toMatchSnapshot();
        expect(component.find('.card-film')).toHaveLength(1);
        expect(title.text()).toEqual(mockData.title);
    });
});
