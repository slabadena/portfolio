import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

/**
 * Renders Container component
 * @param {Object}
 * @returns {JSX}
 */
const Container = ({
    children
}) => (
    <section className="Container">
        <div className="Container__wrapper">
            {children}
        </div>
    </section>
);

Container.propTypes = {
    children: PropTypes.node
};

export default Container;
