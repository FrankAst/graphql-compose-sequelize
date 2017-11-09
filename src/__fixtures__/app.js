/* @flow */

import express from 'express';

const PORT = 8090;
const app = express();

app.get('/', (req, res) => {
  res.send('It works!');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);   //eslint-disable-line
});
