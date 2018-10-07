import React from 'react';
import PropTypes from 'prop-types';
import Head from '../Head';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

/**
 * Renders Layout component
 * @param {Object}
 * @returns {JSX}
 */
const Layout = ({
    title,
    metaDescription,
    metaKeywords,
    children
}) => (
    <div className="Layout">
        <Head
            title={title}
            metaDescription={metaDescription}
            metaKeywords={metaKeywords} />

        <div className="Layout__header">
            <Header />
        </div>

        <div className="Layout__main">
            <Main>
                {children}
            </Main>
        </div>

        <div className="Layout__footer">
            <Footer />
        </div>
    </div>
);

Layout.propTypes = {
    title: PropTypes.string,
    metaDescription: PropTypes.string,
    metaKeywords: PropTypes.string,
    children: PropTypes.node
};

Layout.defaultProps = {
    title: 'Alena Salanovich - portfolio',
    metaDescription: 'Alena Salanovich - portfolio',
    metaKeywords: 'Alena Salanovich - portfolio'
};

export default Layout;
