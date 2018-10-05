import React from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';

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
        <img
            data-src={src}
            alt={alt}
            width={width}
            height={height}
            className={pictureClass} />
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
