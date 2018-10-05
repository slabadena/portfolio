import React from 'react';
import {withSiteData} from 'react-static';
import Layout from '../components/Layout';

/**
 * Renders Home component
 * @returns {JSX}
 */
const Home = () => (
    <Layout>
        Home page
    </Layout>
);

export default withSiteData(Home);
