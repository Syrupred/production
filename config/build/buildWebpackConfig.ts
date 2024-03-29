import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buidPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const { mode, path, isDev } = options;
    return {
        mode,
        entry: path.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: path.build,
            clean: true,
            publicPath: '/',
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
};
