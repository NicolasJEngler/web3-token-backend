require('dotenv').config()

const { APP_PORT, APP_ALLOWED_ORIGIN } = process.env;

const express = require('express');
const app = express();
const port = APP_PORT;
const Web3Token = require('web3-token');
const cors = require('cors');

app.use(cors({
  origin: APP_ALLOWED_ORIGIN,
  credentials: true
}));

app.post('/auth', (req, res) => {
  const token = req.headers['authorization']
  const message = Web3Token.verify(token);

  const { address, body } = message;

  res.send(`Address: ${address}`);
})

app.listen(port, () => {
  console.log(`web3-token app listening on port ${port}`)
})