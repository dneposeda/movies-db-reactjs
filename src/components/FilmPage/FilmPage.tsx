import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Logo from '../logo/Logo';
import { Link } from 'react-router-dom';
import ImageLoader from 'react-imageloader';
import { connect } from 'react-redux';
import { fetchFilmData } from '../../store/actions/action';
import ListFilms from '../listFilms/ListFilms';
import { searchFilms } from '../../store/actions/searchFilms';
import { List } from 'immutable';


class FilmPage extends Component<any, any> {

    constructor(props) {
        super(props);
        console.log('constructor', props);
    }


    async componentDidMount() {
        try {
            await this.props.fetchFilmData(this.props.match.params.id);
            await this.props.searchFilms(this.props.film.genres[0], 'genres');
        } catch (error) {
            console.log(error);
        }
    }


    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        if (nextProps.match.params.id !== this.props.match.params.id) {
            this.props.fetchFilmData(this.props.match.params.id);
        }

        return true;
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
                                                src={ this.props.film.poster_path }
                                                wrapper={React.createFactory('div')}
                                                preloader={ this.preloader }
                                                imgProps={{'alt': this.props.film.title, 'className': 'card-film__img'}}
                                            >
                                                <img src='/images/no-img.png' alt='no img' className="card-film__img"/>
                                            </ImageLoader>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 pt-4">
                                    <div className="d-flex align-items-center">
                                        <h1 className="mb-0">{ this.props.film.title }</h1>
                                        <div className="raining d-flex align-items-center justify-content-center"><span>{ this.props.film.vote_average }</span></div>
                                    </div>
                                    <div className="film-ganre">{ this.props.film.tagline }</div>
                                    <div className="film-info d-flex align-items-center">
                                        <div>{ this.getYear(this.props.film.release_date) }<span> year</span></div>
                                        <div>{ this.props.film.runtime }<span> min</span></div>
                                    </div>
                                    <div className="film-desc">
                                        <p>
                                            { this.props.film.overview }
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
                                <div className="pt-4 pb-4"><strong>Films by {this.props.film.genres[0]} genre</strong></div>
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
        film: state.filmSelected.film,
        films: state.films.films
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchFilmData: id => dispatch(fetchFilmData(id)),
        searchFilms: (searchText, searchType) => dispatch(searchFilms(searchText, searchType)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
