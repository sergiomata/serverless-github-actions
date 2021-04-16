/* eslint-disable no-undef */
'use strict'
const dotenv = require('dotenv').config({ path: './.env' });
const { hello } = require('../handler.js')

describe('tests', () => {
  beforeEach(() => { })
  console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);
  it('integration test error basic auth', async () => {

    expect(await hello()).toEqual({
      statusCode: 200,
      body: process.env.ENV,
    })
  })
})