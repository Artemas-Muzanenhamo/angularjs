const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'production',
    entry: {
        'ng1': './app.module.ts',
        'ng2': './main.ts'
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
        path: __dirname + '/dist'
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        liveReload: true,
        open: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src', 'src/customer'),
                exclude: /node_modules/,
                enforce: "pre",
                use: 'babel-loader'
            },
            {
                test: /\.ts$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                enforce: "pre",
                use: ['babel-loader', 'ts-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                include: path.resolve(__dirname, 'src/customer'),
                exclude: /node_modules/,
                enforce: "pre",
                loader: 'html-loader',
            }
        ]
    },

    resolve: {
        extensions: ['.html', '.js', '.ts']
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            title: 'AngularJS Demo with Webpack + TS'
        }),
        new HtmlWebpackPlugin({
            filename: 'customer/customer.html',
            template: 'customer/customer.html'
        }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanOnceBeforeBuildPatterns: ['dist'],
            cleanStaleWebpackAssets: true
        })
    ]
}