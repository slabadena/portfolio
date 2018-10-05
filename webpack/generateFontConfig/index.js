const path = require('path');

/**
 * Generates config for font
 * @param {Object} props
 * @return {Array}
 */
const generateConfig = (props = {}) => {
    const {font = {}, PATHS = {}} = props;
    const {name = '', styles = []} = font;

    return styles.map((style) => (
        {
            test: /\.(woff|woff2|ttf|eot|svg)$/,
            include: [
                path.join(PATHS.source, 'assets', 'fonts', name, style)
            ],
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: `fonts/${name}/${style}/[name].[ext]`,
                        useRelativePath: false,
                    }
                }
            ]
        }
    ));
};

/**
 * Generate webpack config for fonts
 * @param {Object} props
 * @return {Array}
 */
const generateFontConfig = (props = {}) => {
    const {PATHS = {}, FONTS = [], generate = generateConfig} = props;
    let config = [];

    FONTS.forEach((font) => {
        const fontConfig = generate({font, PATHS});

        config = [
            ...config,
            ...fontConfig
        ];
    });

    return config;
};

exports.generateConfig = generateConfig;
exports.generateFontConfig = generateFontConfig;
