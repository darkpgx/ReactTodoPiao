//Use webpack.ProvidePlugin method to detect any alias such as '$' in any script and require jquery module if not yet required in the top of the file

var webpack = require('webpack');
//For loading sass
var path = require('path');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root:__dirname,
        //webpack config property which looks into to given directory and automatically add alias for the components
        //node_modules is a default directory that should be included
        modulesDirectories: [
          'node_modules',
          './app/components',
          './app/api'
        ],
        alias: {
            applicationStyles: 'app/styles/app.scss',
            actions: 'app/actions/actions.jsx',
            reducers: 'app/reducers/reducers.jsx',
            configureStore: 'app/store/configureStore.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    //Make sass loader aware of the following scss file
    sassLoader: {
      includePaths: [
        path.resolve(__dirname, './node_modules/foundation-sites/scss')
      ]
    },
    devtool: 'cheap-module-eval-source-map'
};
