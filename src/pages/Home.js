import React from 'react';
import {withSiteData, Link} from 'react-static';
import Layout from '../components/Layout';
import Head from '../components/Head';

/**
 * Renders Home component
 * @returns {JSX}
 */
const Home = () => (
    <Layout>
        <Head
            title="Elena Solonovich - portfolio"
            metaDescription="Elena Solonovich - portfolio"
            metaKeywords="Elena Solonovich - portfolio" />

        <nav>
            <Link exact to="/">Home</Link>

            <br />

            <Link to="/dms">DMS</Link>
        </nav>
    </Layout>
);

export default withSiteData(Home);
