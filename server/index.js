const express = require('express');
const cors = require('cors');

const router = require('./router');

const app = express();
const PORT = 3000;

app
  .use(cors())
  .use(express.json())
  .use(router)
  .listen(PORT);

console.log(`server listening at http://localhost:${PORT}`)
