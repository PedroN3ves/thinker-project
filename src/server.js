/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');

const port = 5000;

require('./database/index');

const app = express();

const usersRoutes = require('./routes/userRoutes');
const thoughtsRoutes = require('./routes/thoughtsRotes');

app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views/'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

handlebars.create({
  partialsDir: path.join(__dirname, 'views/partials'),
});

app.use(usersRoutes);
app.use(thoughtsRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
