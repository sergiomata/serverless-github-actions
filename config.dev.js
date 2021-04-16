require('dotenv').config({ path: __dirname + '/.env.development' });
const config = require('./environmentVariables.js');
module.exports.getEnvVars = config.getEnvVars;