import React from 'react';
import {withSiteData} from 'react-static';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Picture from '../components/Picture';

import introImage from '../assets/images/loyalNorth/vis-fushion-intro.jpg';
import homeImage from '../assets/images/loyalNorth/vis-fushion-main.jpg';
import landingImage from '../assets/images/loyalNorth/vis-fushion-landing.jpg';
import iconImage from '../assets/images/loyalNorth/vis-fushion-icon.jpg';
import consultantImage from '../assets/images/loyalNorth/vis-fushion-steps.jpg';
import navigationImage from '../assets/images/loyalNorth/vis-fushion-navigation.jpg';
import surveysImage from '../assets/images/loyalNorth/vis-fushion-surveys.jpg';
import registrationsImage from '../assets/images/loyalNorth/vis-fushion-registrations.jpg';
import guidelineImage from '../assets/images/loyalNorth/vis-fushion-guideline.jpg';
import outroImage from '../assets/images/loyalNorth/vis-fushion-outro.jpg';

/**
 * Renders CaseLoyalNorth component
 * @returns {JSX}
 */
const CaseLoyalNorth = () => (
    <Layout
        title="Alena Salanovich - Loyal North"
        metaDescription="Alena Salanovich - Loyal North"
        metaKeywords="Alena Salanovich - Loyal North">
        <Container>
            <Picture src={introImage} alt="Intro" spinner={false} />

            <Picture src={homeImage} alt="Home page" />

            <Picture src={landingImage} alt="Landing page" />

            <Picture src={iconImage} alt="Icons" />

            <Picture src={consultantImage} alt="Working with consultant" />

            <Picture src={navigationImage} alt="Navigation" />

            <Picture src={surveysImage} alt="Surveys" />

            <Picture src={registrationsImage} alt="Registration" />

            <Picture src={guidelineImage} alt="Guideline" />

            <Picture src={outroImage} alt="Thank you!" />
        </Container>
    </Layout>
);

export default withSiteData(CaseLoyalNorth);
