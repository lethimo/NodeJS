// dựng web server
// Sử dụng framewwork express
var express = require('express');

var app = express();
app.engine()

app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    //res.end('hello express');
    res.render('home')
});

app.listen(3000, () => {
    console.log('run in localhost 3000');
})