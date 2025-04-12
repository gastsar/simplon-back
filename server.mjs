
import http from 'http';
import {app} from './app.mjs'; // Import the app module

app.set('port', process.env.PORT || 3001);
const server = http.createServer(app);

server.listen(process.env.PORT || 3001);