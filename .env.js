// This file allows importing .env variables into serverless.yml
require('dotenv').config()

module.exports.env = () => ({
  GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN
})
