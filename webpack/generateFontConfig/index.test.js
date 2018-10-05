const path = require('path');
const {generateConfig, generateFontConfig} = require('./');

describe('generateConfig', () => {
    test('Should return empty array.', () => {
        expect(generateConfig()).toEqual([]);
    });

    test('Returned value should be equal to data.', () => {
        const props = {
            font: {
                name: 'roboto',
                styles: [
                    'bold'
                ]
            },
            PATHS: {
                source: 'src'
            }
        };

        const data = [
            {
                test: /\.(woff|woff2|ttf|eot|svg)$/,
                include: [
                    path.join(props.PATHS.source, 'assets', 'fonts', 'roboto', 'bold'),
                ],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/roboto/bold/[name].[ext]',
                            useRelativePath: false
                        }
                    }
                ]
            }
        ];

        expect(generateConfig(props)).toEqual(data);
    });
});

describe('generateFontConfig', () => {
    test('Should return empty array.', () => {
        expect(generateFontConfig()).toEqual([]);
    });

    test('Should not call "generate" function.', () => {
        const generate = jest.fn();
        const props = {
            generate
        };

        generateFontConfig(props);

        expect(generate.mock.calls.length).toBe(0);
    });

    test('Should call "generate" function.', () => {
        const generate = jest.fn();

        generate
            .mockReturnValue([]);

        const props = {
            generate,
            FONTS: [
                {}
            ]
        };

        generateFontConfig(props);

        expect(generate.mock.calls.length).toBe(1);
    });
});
