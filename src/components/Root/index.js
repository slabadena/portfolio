import React from 'react';
import {Router} from 'react-static';
import {hot} from 'react-hot-loader';
import Routes from 'react-static-routes';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';
import 'lazysizes';
import '../../assets/fonts/montserrat';
import './index.scss';

const App = () => (
    <Router>
        <Routes />
    </Router>
);

export default hot(module)(App);
