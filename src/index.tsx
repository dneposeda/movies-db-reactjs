import React, {Component} from "react";
import ReactDOM from "react-dom";
import './styles/styles.scss';
import {TypeNameBtnGroups, TypeSearch, TypeSort} from './enum/enum'
import Context from "./context";

// Import Components
import Header from "./components/header/Header";
import FindMovie from "./components/findMovie/FindMovie";
import FilterSort from "./components/controls/filterSort/FilterSort";
import ListFilms from "./components/listFilms/ListFilms";
import Footer from "./components/footer/Footer";
import ErrorBoundary from './components/errorBoundary/errorBoundary';

type MyState = { sort: any, search: any, films: any }
class App extends Component<{}, MyState> {

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
            },
            films: [
                {
                    id: 2,
                    title: 'Reservoir Reservoir',
                    year: 2019,
                    genre: 'Oscar winning Movie',
                    img: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg'
                },
                {
                    id: 3,
                    title: 'Resedogs rvoir dogs',
                    year: 2011,
                    genre: 'Oscar winning Movie',
                    img: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg'
                },
                {
                    id: 4,
                    title: 'Reservoir dogs',
                    year: 1987,
                    genre: 'Oscar winning Movie',
                    img: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg'
                },
                {
                    id: 6,
                    title: 'Reservoir dogs',
                    year: 2020,
                    genre: 'Oscar winning Movie',
                    img: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg'
                },
                {
                    id: 1,
                    title: 'Reservoir dogs',
                    year: 2010,
                    genre: 'Oscar winning Movie',
                    img: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg'
                },
                {
                    id: 5,
                    title: 'Reservoir dogs',
                    year: 1991,
                    genre: 'Oscar winning Movie',
                    img: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg'
                },
            ]
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

    render() {
        return (
            <Context.Provider value={
                { handleClickBtn: this.handleClickBtn } }>
            <>
                <ErrorBoundary>
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
                    <ListFilms films={ this.state.films } />
                    <Footer />
                </ErrorBoundary>
            </>
            </Context.Provider>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
