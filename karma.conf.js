module.exports = function(config) {
  config.set({
    // ... normal karma configuration
    frameworks: ['jasmine'],

    files: [
      // all files ending in "_test"
      'spec/**/*[Ss]pec.js',

      // each file acts as entry point for the webpack configuration
    ],

    preprocessors: {
      // add webpack as preprocessor
      'spec/**/*[Ss]pec.js': ['webpack']
    },

    webpack: {
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader'
          }
        ]
      }
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      noInfo: true
    },

    plugins: [
      require('karma-webpack'),
      require('karma-jasmine')
    ]
  });
};
