require('dotenv').config({ path: __dirname + '/.env.production' });
const config = require('./environmentVariables.js');
module.exports.getEnvVars = config.getEnvVars;