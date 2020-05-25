import React, { FC } from 'react';
import ShortCardFilm from '../shortCardFilm/ShortCardFilm';
import { IFilm } from "../../interfaces/Flims.interface";

interface Props {
    readonly films: IFilm[],
}
type Component = FC<Props>;

const ListFilms: Component = ({ films }) => (
        <div className="wrapper-main">
            <div className="container">
                <div className="row">
                    { films.map((film: IFilm) => <ShortCardFilm film={ film } key={ film.id }/>) }
                </div>
            </div>
        </div>
    )

export default ListFilms;
