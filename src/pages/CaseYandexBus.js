import React from 'react';
import {withSiteData} from 'react-static';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Picture from '../components/Picture';

import introImage from '../assets/images/yandexBus/vis-yandex-intro.jpg';
import searchImage from '../assets/images/yandexBus/vis-yandex-search.jpg';
import suggestionsImage from '../assets/images/yandexBus/vis-yandex-best-suggestions.jpg';
import menuImage from '../assets/images/yandexBus/vis-yandex-menu.jpg';
import task2Image from '../assets/images/yandexBus/vis-yandex-task-2.jpg';
import insuranceImage from '../assets/images/yandexBus/vis-yandex-insurance.jpg';
import favoritesImage from '../assets/images/yandexBus/vis-yandex-favorites.jpg';
import duplicationImage from '../assets/images/yandexBus/vis-yandex-duplication.jpg';
import purchaseImage from '../assets/images/yandexBus/vis-yandex-purchase.jpg';
import problem34Image from '../assets/images/yandexBus/vis-yandex-problem-3-4.jpg';
import solutionsImage from '../assets/images/yandexBus/vis-yandex-solutions.jpg';
import thankImage from '../assets/images/yandexBus/vis-yandex-thank.jpg';

/**
 * Renders CaseYandexBus component
 * @returns {JSX}
 */
const CaseYandexBus = () => (
    <Layout
        title="Alena Salanovich - Yandex.Bus"
        metaDescription="Alena Salanovich - Yandex.Bus"
        metaKeywords="Alena Salanovich - Yandex.Bus">
        <Container>
            <Picture src={introImage} alt="Intro" spinner={false} />

            <Picture src={searchImage} alt="Search" />

            <Picture src={suggestionsImage} alt="Best suggestions" />

            <Picture src={menuImage} alt="Menu" />

            <Picture src={task2Image} alt="Task 2" />

            <Picture src={insuranceImage} alt="Insurance" />

            <Picture src={favoritesImage} alt="Favorites" />

            <Picture src={duplicationImage} alt="Duplication" />

            <Picture src={purchaseImage} alt="Purchase" />

            <Picture src={problem34Image} alt="Problems 3-4" />

            <Picture src={solutionsImage} alt="Solutions" />

            <Picture src={thankImage} alt="Thank you!" />
        </Container>
    </Layout>
);

export default withSiteData(CaseYandexBus);
