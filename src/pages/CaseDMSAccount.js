import React from 'react';
import {withSiteData} from 'react-static';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Picture from '../components/Picture';

import introImage from '../assets/images/dmsAccount/vis-dms_acc-intro.jpg';
import mainImage from '../assets/images/dmsAccount/vis-dms_acc-main.jpg';
import loginImage from '../assets/images/dmsAccount/vis-dms_acc-login.jpg';
import addImage from '../assets/images/dmsAccount/vis-dms_acc-add.jpg';
import info1Image from '../assets/images/dmsAccount/vis-dms_acc-information1.jpg';
import info2Image from '../assets/images/dmsAccount/vis-dms_acc-information2.jpg';
import errorsImage from '../assets/images/dmsAccount/vis-dms_acc-errors.jpg';
import thankImage from '../assets/images/dmsAccount/vis-dms_acc-thank.jpg';

/**
 * Renders CaseDMSAccount component
 * @returns {JSX}
 */
const CaseDMSAccount = () => (
    <Layout
        title="Alena Salanovich - DMS Account"
        metaDescription="Alena Salanovich - DMS Account"
        metaKeywords="Alena Salanovich - DMS Account">
        <Container>
            <Picture src={introImage} alt="Intro" spinner={false} />

            <Picture src={mainImage} alt="Main" />

            <Picture src={loginImage} alt="Login" />

            <Picture src={addImage} alt="Add doctor" />

            <Picture src={info1Image} alt="Information" />

            <Picture src={info2Image} alt="Information" />

            <Picture src={errorsImage} alt="Errors" />

            <Picture src={thankImage} alt="Thank you!" />
        </Container>
    </Layout>
);

export default withSiteData(CaseDMSAccount);
