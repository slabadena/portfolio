import React from 'react';
import {withSiteData} from 'react-static';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Picture from '../components/Picture';

import introImage from '../assets/images/dms/vis-dms-intro.jpg';
import taskImage from '../assets/images/dms/vis-dms-task.jpg';
import loginImage from '../assets/images/dms/vis-dms-login.jpg';
import changePasswordImage from '../assets/images/dms/vis-dms-change-password.jpg';
import mainImage from '../assets/images/dms/vis-dms-main.jpg';
import doctorsImage from '../assets/images/dms/vis-dms-doctors.jpg';
import preloaderImage from '../assets/images/dms/vis-dms-preloader.jpg';
import doctorProfileImage from '../assets/images/dms/vis-dms-doctor-profile.jpg';
import reviewsImage from '../assets/images/dms/vis-dms-reviews.jpg';
import infoImage from '../assets/images/dms/vis-dms-info.jpg';
import surveysImage from '../assets/images/dms/vis-dms-surveys.jpg';
import surveyInformationImage from '../assets/images/dms/vis-dms-survey-information.jpg';
import historyImage from '../assets/images/dms/vis-dms-history.jpg';
import otherImage from '../assets/images/dms/vis-dms-other.jpg';
import colorImage from '../assets/images/dms/vis-dms-color.jpg';
import iconsImage from '../assets/images/dms/vis-dms-icons.jpg';
import thankImage from '../assets/images/dms/vis-dms-thank.jpg';

/**
 * Renders Home component
 * @returns {JSX}
 */
const Home = () => (
    <Layout>
        <Container>
            <Picture src={introImage} alt="Intro" />

            <Picture src={taskImage} alt="Task" />

            <Picture src={loginImage} alt="Login" />

            <Picture src={changePasswordImage} alt="Change password" />

            <Picture src={mainImage} alt="Main screen" />

            <Picture src={doctorsImage} alt="Doctors" />

            <Picture src={preloaderImage} alt="Preloader" />

            <Picture src={doctorProfileImage} alt="Doctor profile" />

            <Picture src={reviewsImage} alt="Reviews" />

            <Picture src={infoImage} alt="Info" />

            <Picture src={surveysImage} alt="Surveys" />

            <Picture src={surveyInformationImage} alt="Survey information" />

            <Picture src={historyImage} alt="History of visits" />

            <Picture src={otherImage} alt="Other screens" />

            <Picture src={colorImage} alt="Color scheme" />

            <Picture src={iconsImage} alt="Icons" />

            <Picture src={thankImage} alt="Thank you!" />
        </Container>
    </Layout>
);

export default withSiteData(Home);
