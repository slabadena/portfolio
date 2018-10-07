import React from 'react';
import {withSiteData, Link} from 'react-static';
import Layout from '../components/Layout';

/**
 * Renders Home component
 * @returns {JSX}
 */
const Home = () => (
    <Layout>
        <nav>
            <Link exact to="/">Home</Link>

            <br />

            <Link to="/dms">DMS</Link>
        </nav>
    </Layout>
);

export default withSiteData(Home);
