const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data/db.json'); // or wherever your db.json lives
const middlewares = jsonServer.defaults();

const cors = require('cors');
server.use(cors()); // 🔥 This is the key line!

server.use(middlewares);
server.use(router);
server.listen(8000, () => {
  console.log('JSON Server is running');
});
