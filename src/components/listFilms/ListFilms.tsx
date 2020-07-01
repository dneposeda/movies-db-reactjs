import React, { FC } from 'react';
import { IFilm } from "../../common/interfaces/Flims.interface";
import ShortCardFilm from '../shortCardFilm/ShortCardFilm';

type Props = {
    films: IFilm[],
}
type Component = FC<Props>;

const ListFilms: Component = ({ films }) => {
    const isEmptyList = !films?.length;
    const filmsList = isEmptyList
        ? 'Список пуст'
        : films.map((film: IFilm) => <ShortCardFilm film={ film } key={ film.id } />);

    return (
        <div className="wrapper-main">
            <div className="container">
                <div className="row">
                    { filmsList }
                </div>
            </div>
        </div>
    )
}

export default ListFilms;
