const { startDevServer } = require('@cypress/vite-dev-server')
const cucumber = require('cypress-cucumber-preprocessor').default
const browserify = require('@cypress/browserify-preprocessor');

module.exports = (on, config) => {
  on('dev-server:start', (options) =>
    startDevServer({
      options,
      viteConfig: {
        clearScreen: false
      },
    })
  );

  const options = {
    ...browserify.defaultOptions,
    typescript: require.resolve('typescript'),
  };

  on('file:preprocessor', cucumber(options));

  return config;
};
