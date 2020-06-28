import React, {FC, useContext} from 'react';
import Btn from "../controls/btn/Btn";
import {IBtn} from "../../interfaces/interfaces";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sortByDate } from '../../store/actions/sortByDate';
import { sortByRating } from '../../store/actions/sortByRating';
import { IFilm } from '../../interfaces/Flims.interface';
import { searchFilmsType } from "../../store/actions/searchFilmsType";


interface Props {
    btns: IBtn[];
    cls?: string[],
    group?: string,
    handleClickBtn?: (id?, group?) => {},
    sortByDate?: Function,
    sortByRating?: Function,
    searchFilmsType?: Function,
    films?: IFilm[],
}
type Component = FC<Props>;

const GropBtns: Component = ({ btns, cls, group, handleClickBtn, sortByDate, sortByRating, searchFilmsType, films }) => (
        <div className="btn-group" role="group">
            { btns.map( ( { id, title, active } ) => (
                <Btn
                    key={ id }
                    title={ title }
                    cls={ cls }
                    handleClick={ () => {
                        handleClickBtn(id, group);
                    }}
                    onClick={ () => {
                        id === 2 && sortByRating(films);
                        id === 1 && sortByDate(films);
                        id === 4 && searchFilmsType('genre');
                        id === 3 && searchFilmsType('title');
                    }}
                    active={ active }
                />
            ))}
        </div>
    )

const mapStateToProps = (state) => {
    return {
        films: state.films.films,
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ sortByDate, sortByRating, searchFilmsType }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GropBtns);
