'use strict';
require('dotenv').config({ path: './.env' });

module.exports.hello = async event => {
  console.log(process.env.ENV);
  return {
    statusCode: 200,
    body: process.env.ENV
  };
  // test to launch workflow
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
