const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const path = require('path');

app.use(express.static(__dirname + '/public/dist/public'));
app.use('/public', express.static(path.resolve('./public')));

app.use(bodyParser.urlencoded({extended:true})); 
app.use(bodyParser.json()); 
const session = require('express-session');
app.use(session({
    secret: 'root',
    resave: false,
    saveUninitialized: true,
    // cookie: { maxAge: 6000 }
}));

require('./server/config/mongoose');
require('./server/config/routes.js')(app);





app.listen(8000, () => {
    console.log("Listening on port 8000");
})
