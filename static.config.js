// import axios from 'axios';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import {generateFontConfig} from './webpack/generateFontConfig';

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'dist'),
};

const FONTS = [
    {
        name: 'montserrat',
        styles: ['bold', 'italic', 'light', 'medium', 'regular', 'semibold']
    }
];

const fontLoader = generateFontConfig({PATHS, FONTS}); // Dynamic generation of rules for fonts

export default {
    getSiteData: () => ({
        title: 'React Static',
    }),
    getRoutes: async () => ([
        {
            path: '/',
            component: 'src/pages/Home',
        }
        // {
        //     path: '/about',
        //     component: 'src/containers/About',
        // },
        // {
        //     path: '/blog',
        //     component: 'src/containers/Blog',
        //     getData: () => ({
        //         posts,
        //     }),
        //     children: posts.map(post => ({
        //         path: `/post/${post.id}`,
        //         component: 'src/containers/Post',
        //         getData: () => ({
        //             post,
        //         }),
        //     })),
        // },
        // {
        //     is404: true,
        //     component: 'src/containers/404',
        // },
    ]),
    webpack: (config, {defaultLoaders, stage}) => {
        let loaders = [];

        if (stage === 'dev') {
            loaders = [
                {loader: 'style-loader'},
                {loader: 'css-loader'},
                {loader: 'postcss-loader'},
                {loader: 'sass-loader'}
            ];
        } else {
            loaders = [
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        minimize: stage === 'prod',
                        sourceMap: false,
                    },
                },
                {
                    loader: 'postcss-loader'
                },
                {
                    loader: 'sass-loader',
                    options: {includePaths: ['src/']},
                },
            ];

            // Don't extract css to file during node build process
            if (stage !== 'node') {
                loaders = ExtractTextPlugin.extract({
                    fallback: {
                        loader: 'style-loader',
                        options: {
                            sourceMap: false,
                            hmr: false,
                        },
                    },
                    use: loaders,
                });
            }
        }

        config.module.rules = [
            {
                oneOf: [
                    {
                        test: /\.s(a|c)ss$/,
                        use: loaders,
                    },
                    defaultLoaders.cssLoader,
                    defaultLoaders.jsLoader,
                    ...fontLoader,
                    defaultLoaders.fileLoader
                ],
            }
        ];

        return config;
    }
};
