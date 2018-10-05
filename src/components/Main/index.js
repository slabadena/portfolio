import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders Main component
 * @param {Object}
 * @returns {JSX}
 */
const Main = ({
    children
}) => (
    <main className="Main">
        {children}
    </main>
);

Main.propTypes = {
    children: PropTypes.node
};

export default Main;
