/**
* @file server.mjs
* @description This file is the entry point of the application. It creates an HTTP server and listens on a specified port.
*! Ressources Openclassrooms - https://openclassrooms.com/fr/courses/6390246-passez-au-fullstack-avec-node-js-express-et-mongodb/6466277-creez-une-application-express
 */

import http from 'http';
import {app} from './app.mjs'; // Import the app module


// Normalize a port into a number, string, or false.
// This function is used to ensure that the port number is in the correct format.
const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};


const PORT = normalizePort(process.env.PORT ||'3001');
app.set('PORT', PORT);

// Event listener for HTTP server "error" events.
// This function handles errors that occur when the server is trying to listen on a port.
const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + PORT;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

// Create HTTP server.
const server = http.createServer(app);


server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + PORT;
  console.log('Listening on ' + bind);
});

// Listen on provided port, on all network interfaces.
server.listen(PORT);