import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
export const buildPlugins = ({path}: BuildOptions): webpack.WebpackPluginInstance[] => {

return [
    new HTMLWebpackPlugin({
        template: path.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css"
    })
]
}