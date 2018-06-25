// var express = require('express')
// var router = express.Router()

// var db = require("../models");
// 
var router = function(app,passport) {

app.get('/', function (request, response) {
    response.render('index')
})

app.get('/logout', function (request, response) {
    request.session.destroy(function(err) {
        response.redirect('/?logout=true');
    })
});

app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/userhome',
    failureRedirect: '/'
}));

app.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/userhome',
    failureRedirect: '/'
}

));
// router.post('/api/register', (request, response) => {
//     console.log(request.body);
//     db.User.create(request.body).then((dbUser) => {
//         response.json(dbUser);


//     })
// })
}
module.exports = router;
