import React, {FC} from 'react';
import { IFilm } from "../../interfaces/Flims.interface";

interface Props {
    readonly film: IFilm,
}
type Component = FC<Props>;

const ShortCartFilm: Component = ({ film }) => (
    <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card-film">
            <div className="card-film__cover">
                <img src={ film.img } alt={ film.title } className="card-film__img"/>
            </div>
            <div className="card-film__info">
                <div className="card-film__title">{ film.title }</div>
                <div className="card-film__year">{ film.year }</div>
            </div>
            <div className="card-film__genre">{ film.genre }</div>
        </div>
    </div>
)

export default ShortCartFilm;
