import React from 'react';
import ListFilms from './ListFilms';

const mockFilms = [
    {
        id: 2,
        title: 'Reservoir Reservoir',
        year: 2019,
        genre: 'Oscar winning Movie',
        img: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg'
    },
    {
        id: 3,
        title: 'Resedogs rvoir dogs',
        year: 2011,
        genre: 'Oscar winning Movie',
        img: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg'
    },
];

describe('ListFilms', () => {
    it('renders correctly', () => {
        const component = shallow (
            <ListFilms films={ mockFilms }/>
        );
        expect(component).toMatchSnapshot();
    });
});
