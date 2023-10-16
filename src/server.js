/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const express = require('express');
const exphbs = require('express-handlebars');
const router = require('./routes');
require('./database/index');

const port = 3003;

const app = express();

app.engine('handlebars', exphbs.engine({ dafaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.static('public'));
app.use(router);

app.listen(port, () => console.log(`Server running on port ${port}`));
