const express = require('express');
const reload = require('reload');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));

app.get('/', (req, res) => res.render('home'));

app.listen(3000, () => console.log('Server start!'));
reload(app);
