import React from 'react';
import {withSiteData} from 'react-static';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Picture from '../components/Picture';

import introImage from '../assets/images/fileShark/vis-shark-intro.jpg';
import addingImage from '../assets/images/fileShark/vis-shark-adding.jpg';
import dataImage from '../assets/images/fileShark/vis-shark-data.jpg';
import otherImage from '../assets/images/fileShark/vis-shark-other.jpg';
import landingImage from '../assets/images/fileShark/vis-shark-landing.jpg';
import price1Image from '../assets/images/fileShark/vis-shark-price1.jpg';
import price2Image from '../assets/images/fileShark/vis-shark-price2.jpg';
import logoImage from '../assets/images/fileShark/vis-shark-logo.jpg';
import contactImage from '../assets/images/fileShark/vis-shark-contact.jpg';
import documentationImage from '../assets/images/fileShark/vis-shark-documentation.jpg';
import thankImage from '../assets/images/fileShark/vis-shark-thank.jpg';

/**
 * Renders CaseFileShark component
 * @returns {JSX}
 */
const CaseFileShark = () => (
    <Layout
        title="Alena Salanovich - File.Shark"
        metaDescription="Alena Salanovich - File.Shark"
        metaKeywords="Alena Salanovich - File.Shark">
        <Container>
            <Picture src={introImage} alt="Intro" spinner={false} />

            <Picture src={addingImage} alt="Adding a file" />

            <Picture src={dataImage} alt="Data editing" />

            <Picture src={otherImage} alt="Other screens" />

            <Picture src={landingImage} alt="Landing page" />

            <Picture src={price1Image} alt="Price 1" />

            <Picture src={price2Image} alt="Price 2" />

            <Picture src={logoImage} alt="Logo" />

            <Picture src={contactImage} alt="Contact" />

            <Picture src={documentationImage} alt="Documentation" />

            <Picture src={thankImage} alt="Thank you!" />
        </Container>
    </Layout>
);

export default withSiteData(CaseFileShark);
