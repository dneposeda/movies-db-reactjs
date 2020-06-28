import React, { FC } from 'react';
import ShortCardFilm from '../shortCardFilm/ShortCardFilm';
import { IFilm } from "../../interfaces/Flims.interface";

interface Props {
    readonly films: IFilm[],
}
type Component = FC<Props>;

const ListFilms: Component = ({ films }) => {
    const isEmptyFilms = !films?.length;
    let listFilm;

    if (isEmptyFilms) {
        listFilm = 'Список пуст';
    } else {
        listFilm = films.map((film: IFilm) => <ShortCardFilm film={ film } key={ film.id } />);
    }

    return (
        <div className="wrapper-main">
            <div className="container">
                <div className="row">
                    { listFilm }
                </div>
            </div>
        </div>
    )
}

export default ListFilms;
