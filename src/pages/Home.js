import React from 'react';
import {withSiteData} from 'react-static';
import Layout from '../components/Layout';
import Container from '../components/Container';

import introImage from '../assets/images/dms/vis-dms-intro.jpg';
import taskImage from '../assets/images/dms/vis-dms-task.jpg';
import loginImage from '../assets/images/dms/vis-dms-login.jpg';

/**
 * Renders Home component
 * @returns {JSX}
 */
const Home = () => (
    <Layout>
        <Container>
            <img src={introImage} alt="intro" />

            <img src={taskImage} alt="task" />

            <img src={loginImage} alt="login" />
        </Container>
    </Layout>
);

export default withSiteData(Home);
