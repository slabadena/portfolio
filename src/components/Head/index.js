import React from 'react';
import PropTypes from 'prop-types';
import {Head} from 'react-static';
import favicon from '../../assets/images/favicon-32x32.png';

/**
 * Renders HeadContainer component
 * @param {Object}
 * @returns {JSX}
 */
const HeadContainer = ({
    title,
    metaDescription,
    metaKeywords,
}) => (
    <Head>
        <meta name="Description" content={metaDescription} />
        <meta name="Keywords" content={metaKeywords} />

        <title>{title}</title>

        <link rel="icon" type="image/png" sizes="32x32" href={favicon} />
    </Head>
);

HeadContainer.propTypes = {
    title: PropTypes.string,
    metaDescription: PropTypes.string,
    metaKeywords: PropTypes.string
};

export default HeadContainer;
