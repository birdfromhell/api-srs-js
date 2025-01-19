const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Read-only Restaurant API',
      version: '1.0.0',
      description: 'A simple Express Restaurant API that provides read-only access to restaurant data',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
  },
  apis: ['./app.js'], // Path to the API docs
};

const specs = swaggerJsdoc(options);

module.exports = specs;

