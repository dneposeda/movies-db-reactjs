import React, { Component } from "react";
import { connect } from "react-redux";
import { TypeNameBtnGroups, TypeSearch, TypeSort, SearchButtonNames, SortButtonNames } from '../../common/enum/enum'
import { fetchFilms } from '../../store/actions/action';
import { sortFilms } from '../../store/actions/sortFilms';
import { setSearchCriteria } from '../../store/actions/setSearchCriteria';
import MoviesSearch from "../MoviesSearch/MoviesSearch";
import Filter from "../controls/filter/Filter";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import ListFilms from "../listFilms/ListFilms";
import '../../styles/styles.scss';
import { IFilm } from "../../common/interfaces/Flims.interface";

type TAppProps = {
    films: IFilm[],
    fetchFilms: () => void,
    sortFilms: (sortBy: string) => void,
    searchCriteria: string,
    setSearchCriteria: (searchCriteria: string) => void
}

class App extends Component<TAppProps> {
    componentDidMount() {
        this.props.fetchFilms();
        this.props.setSearchCriteria('title');
    };

    render() {
        const { sortFilms, films, setSearchCriteria } = this.props;

        return (
            <>
                <div className="wrapper-header">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Header/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <MoviesSearch
                                    title={TypeNameBtnGroups.SEARCH}
                                    btns={[
                                        {
                                            id: TypeSearch.TITLE,
                                            title: SearchButtonNames.TITLE,
                                        },
                                        {
                                            id: TypeSearch.GENRE,
                                            title: SearchButtonNames.GENRE,
                                        },
                                    ]}
                                    onFilter={ setSearchCriteria }
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrapper-sort">
                    <div className="container">
                        <div className="row justify-content-end">
                            <div className="col-auto ml-auto">
                                <div data-sort="sortMovie" className="sort">
                                    <Filter
                                        title={ TypeNameBtnGroups.SORT }
                                        btns={ [
                                            {
                                                id: TypeSort.DATE,
                                                title: SortButtonNames.DATE
                                            },
                                            {
                                                id: TypeSort.RATING,
                                                title: SortButtonNames.RATING,
                                            },
                                        ] }
                                        onFilter={ sortFilms }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ListFilms films={ films } />
                <Footer />
            </>
        );
    }
}

const mapStateToProps = (state) => ({
        films: state.films,
        searchCriteria: state.searchCriteria
    });

const mapDispatchToProps = (dispatch) => ({
        fetchFilms: () => dispatch(fetchFilms()),
        sortFilms: sortBy => dispatch(sortFilms(sortBy)),
        setSearchCriteria: searchCriteria => dispatch(setSearchCriteria(searchCriteria)),
    });

export default connect(mapStateToProps, mapDispatchToProps)(App);


