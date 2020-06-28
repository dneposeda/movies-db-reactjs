import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/styles.scss';

// Import Components
import ErrorBoundary from './components/errorBoundary/errorBoundary';
import App from './components/app/App';
import { store } from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);
