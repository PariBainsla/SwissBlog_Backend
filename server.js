const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data/db.json'); // path to your JSON file
const middlewares = jsonServer.defaults();
const cors = require('cors');

// Enable CORS for all requests
server.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type']
}));

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
