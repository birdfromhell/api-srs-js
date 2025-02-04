require('dotenv').config();

const config = {
  DATABASE_HOST: process.env.DATABASE_HOST ,
  DATABASE_PORT: process.env.DATABASE_PORT ,
  DATABASE_USER: process.env.DATABASE_USER ,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD ,
  DATABASE_NAME: process.env.DATABASE_NAME ,
};

config.DATABASE_URL = `mysql://${config.DATABASE_USER}:${config.DATABASE_PASSWORD}@${config.DATABASE_HOST}:${config.DATABASE_PORT}/${config.DATABASE_NAME}?charset=utf8mb4`;

module.exports = config;

