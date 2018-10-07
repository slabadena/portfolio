import React from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';
import Spinner from '../Spinner';
import './index.scss';

/**
 * Renders Picture component
 * @param {Object}
 * @returns {JSX}
 */
const Picture = ({
    src,
    alt,
    width,
    height,
    lazyload
}) => {
    const pictureClass = Classnames({
        lazyload
    });

    return (
        <div className="Picture">
            <div className="Picture__spinner">
                <Spinner />
            </div>

            <div className="Picture__image">
                <img
                    data-src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className={pictureClass} />
            </div>
        </div>
    );
};

Picture.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    lazyload: PropTypes.bool
};

Picture.defaultProps = {
    lazyload: true
};

export default Picture;
