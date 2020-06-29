import React, {FC} from 'react';
import { IFilm } from "../../interfaces/Flims.interface";
import ImageLoader from 'react-imageloader';
import '../../images/spinner.svg';
import '../../images/no-img.png';
import { Link } from "react-router-dom";

interface Props {
    readonly film: IFilm,
}
type Component = FC<Props>;

const preloader = () => <img src="/images/spinner.svg"/>;
const getYear = (date) => new Date(date).getFullYear();


const ShortCartFilm: Component = ({ film }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <Link to={{ pathname: `/film/${film.id}` }} className="card-film-link">
                <div className="card-film__cover">
                    <ImageLoader
                        src={ film.poster_path }
                        wrapper={React.createFactory('div')}
                        preloader={preloader}
                        imgProps={{'alt': film.title, 'className': 'card-film__img'}}
                    >
                        <img src='/images/no-img.png' alt='no img' className="card-film__img"/>
                    </ImageLoader>
                </div>
                <div className="card-film__info">
                    <div className="card-film__title">{ film.title }</div>
                    <div className="card-film__year">{ getYear(film.release_date) }</div>
                </div>
                <div className="card-film__genre">{ film.genres.join(', ') }</div>
            </Link>
        </div>
    )
}

export default ShortCartFilm;
