// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// this will fail if variables defined in the .dist file are not available either in the environment on the .env file
// Anything already defined in the environment is not overriden by the values from .env
require('dotenv-safe').config({ path: '.env', example: '../.env.e2e.dist' });

module.exports = (on, config) => {
  config.env.baseUrl = process.env.CYPRESS_HOST;

  return config;
};
