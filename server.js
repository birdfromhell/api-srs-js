const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');
const app = require('./app');

// Memory management
const v8 = require('v8');
v8.setFlagsFromString('--max-old-space-size=2048'); // Set heap limit to 2GB

// Environment variables
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Create server
const server = express();

// Middlewares
server.use(compression()); // Compress responses
server.use(helmet()); // Security headers
server.use(morgan('combined')); // Logging
server.use('/', app);

// Error handling
server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
let serverInstance = server.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${NODE_ENV} mode`);
  console.log(`Memory usage: ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`);
});

// Graceful shutdown
const shutdown = () => {
  console.log('Received kill signal, shutting down gracefully');
  serverInstance.close(() => {
    console.log('Closed out remaining connections');
    process.exit(0);
  });

  setTimeout(() => {
    console.error('Could not close connections in time, forcefully shutting down');
    process.exit(1);
  }, 10000);
};

// Process handlers
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  shutdown();
});
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  shutdown();
});