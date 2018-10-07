import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/es6/object';
import 'core-js/es6/string';
import 'core-js/fn/promise';
import Root from './components/Root';

// Export your top level component as JSX (for static rendering)
export default Root;

// Render your app
if (typeof document !== 'undefined') {
    const renderMethod = module.hot
        ? ReactDOM.render
        : ReactDOM.hydrate || ReactDOM.render;

    const render = (Comp) => {
        renderMethod(<Comp />, document.getElementById('root'));
    };

    // Render!
    render(Root);
}
