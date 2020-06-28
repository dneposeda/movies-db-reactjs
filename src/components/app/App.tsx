import React, {Component} from "react";
import '../../styles/styles.scss';
import {TypeNameBtnGroups, TypeSearch, TypeSort} from '../../enum/enum'
import { connect } from "react-redux";
import { fetchFilms } from '../../store/actions/action';

// Import Components
import Header from "../header/Header";
import FindMovie from "../findMovie/FindMovie";
import FilterSort from "../controls/filterSort/FilterSort";
import ListFilms from "../listFilms/ListFilms";
import Footer from "../footer/Footer";
import Context from "../../context";

type MyState = { sort: any, search: any }
type MyProps = { films: any[], fetchFilms: any }

class App extends Component<MyProps, MyState> {
    constructor(props) {
        super(props);
        this.state = {
            sort: {
                titleGroup: TypeNameBtnGroups.SORT,
                btns: [
                    { id: 1, title: TypeSort.DATE, active: true },
                    { id: 2, title: TypeSort.RATING, active: false },
                ]
            },
            search: {
                titleGroup: TypeNameBtnGroups.SEARCH,
                btns: [
                    { id: 3, title: TypeSearch.TITLE, active: true },
                    { id: 4, title: TypeSearch.GENRE, active: false },
                ]
            }
        };

        this.handleClickBtn = this.handleClickBtn.bind(this);
    }

    handleClickBtn(id: number, group: TypeNameBtnGroups) {
        const btns = this.state[group].btns.map( btn => {
            btn.id === id ? btn.active = true : btn.active = false;
            return btn;
        });
        group === TypeNameBtnGroups.SORT && this.setState({ sort: { titleGroup: this.state[group].titleGroup, btns}})
        group === TypeNameBtnGroups.SEARCH && this.setState({ search: { titleGroup: this.state[group].titleGroup, btns}})
    }

    componentDidMount() {
        this.props.fetchFilms();
    };

    render() {
        return (
            <Context.Provider value={
                { handleClickBtn: this.handleClickBtn } }>
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
                                <FindMovie type={ this.state.search }/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrapper-sort">
                    <div className="container">
                        <div className="row justify-content-end">
                            <div className="col-auto ml-auto">
                                <div data-sort="sortMovie" className="sort">
                                    <FilterSort type={ this.state.sort }/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ListFilms films={ this.props.films } />
                <Footer />
            </>
            </Context.Provider>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        films: state.films.films
    };
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchFilms: () => { dispatch(fetchFilms()) }
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


