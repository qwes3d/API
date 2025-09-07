const swaggerJSDoc = require('swagger-jsdoc');


const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'Contacts API',
      version: '1.0.0',
      description: 'API for managing contacts (CSE341 Week 02)'
    },
    servers: [
      { url: '/', description: 'Current server' }
    ],
    components: {
      schemas: {
        Contact: {
          type: 'object',
          required: ['firstName','lastName','email','favoriteColor','birthday'],
          properties: {
            firstName: { type: 'string' },
            lastName: { type: 'string' },
            email: { type: 'string' },
            favoriteColor: { type: 'string' },
            birthday: { type: 'string', example: '1990-01-01' }
          }
        }
      }
    }
  },
  apis: ['./routes/*.js']
});

module.exports = { swaggerSpec };
