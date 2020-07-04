import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { store } from './store/store';
import App from './components/app/App';
import ErrorBoundary from './components/errorBoundary/errorBoundary';
import FilmPage from './components/FilmPage/FilmPage';
import NotFound from './components/NotFound/NotFound';
import './styles/styles.scss';

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <ErrorBoundary>
                <Switch>
                    <Route exact path="/" component={ App } />
                    <Route exact path="/film/:id" component={ FilmPage } />
                    <Route component={ NotFound } />
                </Switch>
            </ErrorBoundary>
        </Provider>
    </Router>,
    document.getElementById('root')
);
