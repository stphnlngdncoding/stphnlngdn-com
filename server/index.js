const express = require('express');

const app = express();

app.get('*', (req, res) => res.send('hello from express!'));

app.listen(9000, () => console.log('server started on port 9000'));
