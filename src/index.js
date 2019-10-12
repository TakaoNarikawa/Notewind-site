import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route
} from 'react-router-dom'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Router = () => (
    <BrowserRouter >
        <div>
            <Route exact path='/' render={props => <App lang={'en'} {...props} />} />
            <Route exact path='/Notewind-site/' render={props => <App lang={'en'} {...props} />} />
            <Route exact path='/Notewind-site/en/' render={props => <App lang={'en'} {...props} />} />
            <Route exact path='/Notewind-site/jp/' render={props => <App lang={'jp'} {...props} />} />
        </div>
    </BrowserRouter>
)

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
