import React from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';
import './index.scss';

/**
 * Renders Pagination component
 * @param {Object}
 * @returns {JSX}
 */
const Pagination = ({
    current,
    total,
    onPrev,
    onNext
}) => {
    const prevButtonClass = Classnames({
        Pagination__prev: true,
        Pagination__button: true,
        Pagination__button_disabled: current === 1
    });
    const nextButtonClass = Classnames({
        Pagination__next: true,
        Pagination__button: true,
        Pagination__button_disabled: current === total
    });

    return (
        <div className="Pagination">
            <button type="button" className={prevButtonClass} onClick={onPrev}>
                <svg version="1.1" width="35px" height="13px" viewBox="0 0 35 13">
                    <polygon
                        fill="#333333"
                        points="6.266,0.214 7.732,1.573 3.631,6 34.499,6 34.499,8 4.046,8 7.68,11.373 6.318,12.84 0,6.975" />
                </svg>
            </button>

            <div className="Pagination__pos">
                {current}
                <span>/</span>
                {total}
            </div>

            <button type="button" className={nextButtonClass} onClick={onNext}>
                <svg version="1.1" width="35px" height="13px" viewBox="0 0 35 13">
                    <polygon
                        fill="#333333"
                        points="28.233,0.214 26.767,1.573 30.868,6 0,6 0,8 30.453,8 26.819,11.373 28.181,12.84 34.499,6.975" />
                </svg>
            </button>
        </div>
    );
};

Pagination.propTypes = {
    current: PropTypes.number,
    total: PropTypes.number,
    onPrev: PropTypes.func,
    onNext: PropTypes.func
};

Pagination.defaultProps = {
    current: 0,
    total: 0,
    onPrev: (f) => f,
    onNext: (f) => f
};

export default Pagination;
