import React from 'react';
import Classnames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

/**
 * Renders Button component
 * @param {Object}
 * @returns {JSX}
 */
const Button = ({
    href,
    text,
    title,
    target,
    onClick,
    theme,
    size,
    disabled
}) => {
    const buttonClass = Classnames({
        Button: true,

        Button_theme_super: theme === 'super',
        Button_theme_alert: theme === 'alert',
        Button_theme_primary: theme === 'primary',
        Button_theme_secondary: theme === 'secondary',
        Button_theme_disabled: theme === 'disabled',
        Button_theme_light: theme === 'light',
        Button_theme_dark: theme === 'dark',
        Button_theme_pale: theme === 'pale',

        Button_size_small: size === 'small',
        Button_size_medium: size === 'medium',
        Button_size_big: size === 'big',
        Button_size_full: size === 'full',

        Button_disabled: disabled
    });
    const Tag = (href)
        ? 'a'
        : 'button';

    return (
        <Tag
            className={buttonClass}
            href={href}
            title={title}
            target={target}
            onClick={onClick}>
            {text}
        </Tag>
    );
};

Button.propTypes = {
    href: PropTypes.string,
    text: PropTypes.string.isRequired,
    title: PropTypes.string,
    target: PropTypes.oneOf(['_blank', '_parent', '_self', '_top']),
    onClick: PropTypes.func,
    theme: PropTypes.oneOf(['alert', 'primary', 'secondary', 'disabled', 'super', 'light', 'dark', 'pale']),
    size: PropTypes.oneOf(['small', 'medium', 'big', 'full']),
    disabled: PropTypes.bool
};

Button.defaultProps = {
    theme: 'primary',
    size: 'small'
};

export default Button;
