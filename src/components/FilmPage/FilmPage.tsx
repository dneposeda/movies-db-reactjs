import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFilmData } from '../../store/actions/action';
import { searchFilms } from '../../store/actions/searchFilms';
import { IFilm } from '../../common/interfaces/Flims.interface';
import Footer from '../footer/Footer';
import Logo from '../logo/Logo';
import ListFilms from '../listFilms/ListFilms';
import Image from './../Image/Image';
import { TypeSearch } from '../../common/enum/enum';

type TFilmPageProps = {
    match,
    selectedFilm: IFilm,
    films: IFilm[],
    fetchFilmData: (id: number) => void,
    searchFilms: (searchText: string, searchType: string) => void
}

class FilmPage extends Component<TFilmPageProps> {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchFilmData(this.props.match.params.id);
        this.props.searchFilms(this.props.selectedFilm.genres[0], TypeSearch.GENRE);
    }

    getYear = (date) => new Date(date).getFullYear();

    render() {
        const { selectedFilm, films } = this.props;

        return (
            <>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col">
                            <header className="header d-flex justify-content-between">
                                <Logo />
                                <Link to={{ pathname: '/'}} className="">
                                    <i className="fas fa-search fa-search--color"></i>
                                </Link>
                            </header>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card-film">
                                        <div className="card-film__cover">
                                            <Image src={ selectedFilm.poster_path } title={ selectedFilm.poster_path } />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 pt-4">
                                    <div className="d-flex align-items-center">
                                        <h1 className="mb-0">{ selectedFilm.title }</h1>
                                        <div className="raining d-flex align-items-center justify-content-center"><span>{ selectedFilm.vote_average }</span></div>
                                    </div>
                                    <div className="film-ganre">{ selectedFilm.tagline }</div>
                                    <div className="film-info d-flex align-items-center">
                                        <div>{ this.getYear(selectedFilm.release_date) }<span> year</span></div>
                                        <div>{ selectedFilm.runtime }<span> min</span></div>
                                    </div>
                                    <div className="film-desc">
                                        <p>
                                            { selectedFilm.overview }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrapper-sort">
                    <div className="container">
                        <div className="row justify-content-end">
                            <div className="col-auto mr-auto">
                                <div className="pt-4 pb-4"><strong>Films by { selectedFilm.genres[0] } genre</strong></div>
                            </div>
                        </div>
                    </div>
                </div>
                <ListFilms films={ films }/>
                <Footer />
            </>
        );
    }
}

const mapStateToProps = state => ({
        selectedFilm: state.selectedFilm,
        films: state.films
    });

const mapDispatchToProps = dispatch => ({
        fetchFilmData: id => dispatch(fetchFilmData(id)),
        searchFilms: (searchText, searchType) => dispatch(searchFilms(searchText, searchType)),
    });

export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
