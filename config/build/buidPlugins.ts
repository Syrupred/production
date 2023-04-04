import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export const buildPlugins = ({
    path,
    isDev, project,
}: BuildOptions): webpack.WebpackPluginInstance[] => [
    new HTMLWebpackPlugin({
        template: path.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
        __IS__DEV: JSON.stringify(isDev),
        __PROJECT: JSON.stringify(project),
    }),

];
