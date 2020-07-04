import React, {FC} from 'react';
import { Link } from "react-router-dom";
import { IFilm } from "../../common/interfaces/Flims.interface";
import Image from './../Image/Image';

type Props = {
    film: IFilm,
}
type Component = FC<Props>;

const getYear = (date) => new Date(date).getFullYear();

const ShortCartFilm: Component = ({ film }) => (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <Link to={{ pathname: `/film/${film.id}` }} className="card-film-link">
                <div className="card-film__cover">
                    <Image src={ film.poster_path } title={ film.poster_path } />
                </div>
                <div className="card-film__info">
                    <div className="card-film__title">{ film.title }</div>
                    <div className="card-film__year">{ getYear(film.release_date) }</div>
                </div>
                <div className="card-film__genre">{ film.genres.join(', ') }</div>
            </Link>
        </div>
    )

export default ShortCartFilm;
