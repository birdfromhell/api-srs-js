const express = require('express');
const app = require('./app'); // Import main application
const path = require('path');

// Get port from environment or use 3000 as default
const PORT = process.env.PORT || 3000;

// Create HTTP server
const server = express();

// Use the main application
server.use('/', app);

// Error handling middleware
server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Process ID: ${process.pid}`);
  console.log(`Working directory: ${process.cwd()}`);
});

// Handle unhandled rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});