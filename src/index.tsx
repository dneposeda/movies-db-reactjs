import React from "react";
import ReactDOM from "react-dom";
import './styles/styles.scss';
import { TypeNameBtnGroups } from './enum/enum'

// Import Components
import Header from "./components/header/Header";
import FindMovie from "./components/findMovie/FindMovie";
import FilterSort from "./components/controls/filterSort/FilterSort";
import ListFilms from "./components/listFilms/ListFilms";
import Footer from "./components/footer/Footer";
import ErrorBoundary from './components/errorBoundary/errorBoundary';

class App extends React.Component {
    state = {
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
    }

    render() {
        return (
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
                                    <FindMovie/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper-sort">
                        <div className="container">
                            <div className="row justify-content-end">
                                <div className="col-auto ml-auto">
                                    <div className="sort">
                                        <FilterSort type={ TypeNameBtnGroups.SORT } />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ListFilms films={ this.state.films } />
                    <Footer />
                </ErrorBoundary>
            </>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
