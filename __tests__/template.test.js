/* eslint-disable no-undef */
'use strict'
const dotenv = require('dotenv').config();
const { hello } = require('../handler.js')

describe('tests', () => {
  beforeEach(() => { })
  it('integration test error basic auth', async () => {

    expect(await hello()).toEqual({
      statusCode: 200,
      body: process.env.ENV,
    })
  })
})