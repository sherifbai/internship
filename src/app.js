const express = require('express');
const hbs = require('express-handlebars');

const app = express();

const data = require('./data/data');


app.use(express.urlencoded({extended: false}));
app.engine('hbs', hbs.engine({
    defaultLayout: 'main',
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

app.get('/', (req, res) => {
    res.render('index', {
        data: data,
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:3000`);
})
