import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Logo from '../logo/Logo';
import { Link } from 'react-router-dom';
import ImageLoader from 'react-imageloader';
import { connect } from 'react-redux';
import { fetchFilmData } from '../../store/actions/action';
import ListFilms from '../listFilms/ListFilms';
import { searchFilms } from '../../store/actions/searchFilms';
import { IFilm } from '../../interfaces/Flims.interface';

type MyProps = {
    match,
    selectedFilm: IFilm,
    films: IFilm[],
    fetchFilmData: (id: number) => void,
    searchFilms: (searchText: string, searchType: string) => void
}

class FilmPage extends Component<MyProps> {

    constructor(props) {
        super(props);
        console.log('constructor', props);
    }


    componentDidMount() {
        this.props.fetchFilmData(this.props.match.params.id);
        this.props.searchFilms(this.props.selectedFilm.genres[0], 'genres');
    }

    getYear = (date) => new Date(date).getFullYear();

    preloader = () => <img src="/images/spinner.svg"/>;

    render() {
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
                                            <ImageLoader
                                                src={ this.props.selectedFilm.poster_path }
                                                wrapper={React.createFactory('div')}
                                                preloader={ this.preloader }
                                                imgProps={{'alt': this.props.selectedFilm.title, 'className': 'card-film__img'}}
                                            >
                                                <img src='/images/no-img.png' alt='no img' className="card-film__img"/>
                                            </ImageLoader>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 pt-4">
                                    <div className="d-flex align-items-center">
                                        <h1 className="mb-0">{ this.props.selectedFilm.title }</h1>
                                        <div className="raining d-flex align-items-center justify-content-center"><span>{ this.props.selectedFilm.vote_average }</span></div>
                                    </div>
                                    <div className="film-ganre">{ this.props.selectedFilm.tagline }</div>
                                    <div className="film-info d-flex align-items-center">
                                        <div>{ this.getYear(this.props.selectedFilm.release_date) }<span> year</span></div>
                                        <div>{ this.props.selectedFilm.runtime }<span> min</span></div>
                                    </div>
                                    <div className="film-desc">
                                        <p>
                                            { this.props.selectedFilm.overview }
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
                                <div className="pt-4 pb-4"><strong>Films by {this.props.selectedFilm.genres[0]} genre</strong></div>
                            </div>
                        </div>
                    </div>
                </div>
                <ListFilms films={ this.props.films }/>
                <Footer />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedFilm: state.selectedFilm,
        films: state.films
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchFilmData: id => dispatch(fetchFilmData(id)),
        searchFilms: (searchText, searchType) => dispatch(searchFilms(searchText, searchType)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
