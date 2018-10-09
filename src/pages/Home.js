import React from 'react';
import {withSiteData, Link} from 'react-static';
import Layout from '../components/Layout';

/**
 * Renders Home component
 * @returns {JSX}
 */
const Home = () => (
    <Layout>
        <div style={{padding: '50px'}}>
            <h1>Alena Salanovich - portfolio</h1>

            <br />

            <nav>
                <ul>
                    <li>
                        <Link exact to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/dms">DMS</Link>
                    </li>

                    <li>
                        <Link to="/loyal-north">Loyal North</Link>
                    </li>

                    <li>
                        <Link to="/yandex-bus">Yandex.Bus</Link>
                    </li>

                    <li>
                        <Link to="/file-shark">File.Shark</Link>
                    </li>

                    <li>
                        <Link to="/dms-account">DMS Account</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </Layout>
);

export default withSiteData(Home);
