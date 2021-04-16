module.exports.getEnvVars = () => ({
  API_GATEWAY_ID: process.env.API_GATEWAY_ID,
  API_GATEWAY_RESOURCE_ID: process.env.API_GATEWAY_RESOURCE_ID,
  ENV: process.env.ENV,
});