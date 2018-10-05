import React from 'react';
import Button from '../Button';
import heroImage from '../../assets/images/vis-hero.png';
import './index.scss';

/**
 * Renders Hero component
 * @returns {JSX}
 */
const Hero = () => (
    <section className="Hero">
        <div className="Hero__wrapper">
            <div className="Hero__columns">
                <div className="Hero__data">
                    <div className="Hero__title">
                        <h1>MediaManager for&nbsp;your CMS</h1>
                    </div>

                    <div className="Hero__subtitle">
                        <h5>Описательный текст для кого? Кастомное решение для управления вашими файлами в админке (в система управления контентом (CMS))</h5>
                    </div>

                    <div className="Hero__cta">
                        <Button
                            text="Buy"
                            size="medium" />
                    </div>
                </div>

                <div className="Hero__graphics">
                    <div className="Hero__image">
                        <img src={heroImage} alt="Media manager" />
                    </div>
                </div>
            </div>
        </div>

        <div className="Hero__border">
            <svg version="1.1" viewBox="0 0 1920 226">
                <path
                    fill="#FFFFFF"
                    d="M0,89c281.237,67.967,606.978,101.949,977.218,101.949
                    c370.241,0,684.502-63.596,942.782-190.788V226H0V89z M0,89c281.237,67.967,606.978,101.949,977.218,101.949
                    c370.241,0,684.502-63.596,942.782-190.788V226H0V89z" />
            </svg>
        </div>
    </section>
);

export default Hero;
