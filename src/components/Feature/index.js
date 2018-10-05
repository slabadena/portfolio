import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

/**
 * Renders Feature component
 * @param {Object}
 * @returns {JSX}
 */
const Feature = ({
    Icon,
    title,
    description
}) => (
    <div className="Feature">
        <div className="Feature__wrapper">
            <div className="Feature__header">
                <div className="Feature__icon">
                    <Icon />
                </div>
            </div>

            <div className="Feature__content">
                <div className="Feature__title">
                    <h4>{title}</h4>
                </div>

                <div className="Feature__description">{description}</div>
            </div>
        </div>
    </div>
);

Feature.propTypes = {
    Icon: PropTypes.func,
    title: PropTypes.string,
    description: PropTypes.string
};

export default Feature;
