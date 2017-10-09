const express = require('express');
const reload = require('reload');
const parser = require('body-parser').urlencoded({ extended: false });
const Product = require('./db');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));

app.get('/', (req, res) => res.render('home'));

app.get('/admin', (req, res) => {
    Product.find({})
    .then(products => res.render('admin', { products }))
    .catch(err => res.send(err.message));
});

app.get('/add', (req, res) => {
    res.render('add');
});

app.post('/add', parser, (req, res) => {
    const { name, desc, image, video } = req.body;
    const product = new Product({ name, desc, image, video });
    product.save()
    .then(() => res.redirect('/admin'))
    .catch(err => res.send(err.message));
});

app.get('/remove/:id', (req, res) => {
    const { id } = req.params;
    Product.findByIdAndRemove(id)
    .then(() => res.redirect('/admin'))
    .catch(err => res.send(err.message));
});

app.get('/update/:id', (req, res) => {
    const { id } = req.params;
    Product.findById(id)
    .then(product => res.render('update', { product }))
    .catch(err => res.send(err.message));
});

app.post('/update/:id', parser, (req, res) => {
    const { name, desc, image, video } = req.body;
    const { id } = req.params;
    Product.findByIdAndUpdate(id, { name, desc, image, video })
    .then(() => res.redirect('/admin'))
    .catch(() => res.send(err.message));
});

app.listen(3000, () => console.log('Server start!'));
reload(app);

// Cai dat heroku cli
// Tao tai khoan heroku
// Tao tai khoan mlab.com
