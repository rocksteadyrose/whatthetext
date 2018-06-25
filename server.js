var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var cookieParser = require('cookie-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

require('./config/passport.js')(passport);

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static("public"));

require('./controllers/index-routes.js')(app,passport);

require('./controllers/userhome-routes.js')(app,passport);

app.listen(PORT, () => {
    console.log("App listening on http://localhost:" + PORT)
})
