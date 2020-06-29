import React, {Component} from "react";
import '../../styles/styles.scss';
import {TypeNameBtnGroups, TypeSearch, TypeSort, SearchButtonNames, SortButtonNames} from '../../enum/enum'
import { connect } from "react-redux";
import { fetchFilms } from '../../store/actions/action';
import { sortFilms } from '../../store/actions/sortFilms';
import { setSearchCriteria } from '../../store/actions/setSearchCriteria';
// Import Components
import Header from "../header/Header";
import FindMovie from "../findMovie/FindMovie";
import FilterSort from "../controls/filterSort/FilterSort";
import ListFilms from "../listFilms/ListFilms";
import Footer from "../footer/Footer";

type MyProps = { films: any[], fetchFilms: any, sortFilms: any, setSearchCriteria: any }

class App extends Component<MyProps> {
    componentDidMount() {
        this.props.fetchFilms();
    };

    render() {
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
                                <FindMovie
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
                                  onFilter={this.props.setSearchCriteria}
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
                                    <FilterSort
                                      onFilter={this.props.sortFilms}
                                      title={TypeNameBtnGroups.SORT}
                                      btns={[
                                        {
                                          id: TypeSort.DATE,
                                          title: SortButtonNames.DATE
                                        },
                                        {
                                          id: TypeSort.RATING,
                                          title: SortButtonNames.RATING,
                                        },
                                      ]} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ListFilms films={ this.props.films } />
                <Footer />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        films: state.films
    };
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchFilms: () => dispatch(fetchFilms()),
        sortFilms: sortBy => dispatch(sortFilms(sortBy)),
        setSearchCriteria: searchCriteria => dispatch(setSearchCriteria(searchCriteria)),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


