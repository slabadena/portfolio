import React from 'react';
import {Router} from 'react-static';
import {hot} from 'react-hot-loader';
import Routes from 'react-static-routes';
import '../../assets/fonts/montserrat';
import './index.scss';

if (typeof window !== 'undefined') {
    /* eslint-disable global-require */
    require('lazysizes/plugins/unveilhooks/ls.unveilhooks');
    require('lazysizes');
    /* eslint-enable global-require */
}

const App = () => (
    <Router>
        <Routes />
    </Router>
);

export default hot(module)(App);
