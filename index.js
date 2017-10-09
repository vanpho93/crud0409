const express = require('express');
const reload = require('reload');
const Product = require('./db');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));

app.get('/', (req, res) => res.render('home'));

app.get('/admin', (req, res) => {
    // Lay du lieu
    // Hien thi len admin.ejs
    res.render('admin');
});

app.listen(3000, () => console.log('Server start!'));
reload(app);
