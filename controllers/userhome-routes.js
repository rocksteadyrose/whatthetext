const path = require("path");
const fs = require("fs");
var db = require("../models");

var router = (app) => {

    ////  ROUTES USED FOR INDEX.HANDLEBARS - see inside config/passport.js


    ////////  ROUTES USED ON USERHOME.HANDLEBARS  ///////////////////////////

    app.get('/userhome', (request, response) => {
        response.render('userhome')
    })

    app.get('/api/userhome', (request, response) => {
        db.Text.findAll({})
            .then((result) => {
                response.json(result);
            })
    })

    app.get('/api/lol', (request, response) => {
        db.Text.findAll({
            where: { lol: 1 }
        })
            .then((result) => {
                response.json(result);
            })
    })

    app.get('/api/wtfam', (request, response) => {
        db.Text.findAll({
            where: { wtfam: 1 }
        })
            .then((result) => {
                response.json(result);
            })
    })

    app.get('/api/ew', (request, response) => {
        db.Text.findAll({
            where: { ew: 1 }
        })
            .then((result) => {
                response.json(result);
            })
    })

    app.get('/api/bff', (request, response) => {
        db.Text.findAll({
            where: { bff: 1 }
        })
            .then((result) => {
                response.json(result);
            })
    })

    app.get('/api/nsfw', (request, response) => {
        db.Text.findAll({
            where: { nsfw: 1 }
        })
            .then((result) => {
                response.json(result);
            })
    })

    app.get('/api/fail', (request, response) => {
        db.Text.findAll({
            where: { fail: 1 }
        })
            .then((result) => {
                response.json(result);
            })
    })

    app.get('/halloffame', function (request, response) {
        response.render('halloffame')
    })

    app.get('/hallofshame', function (request, response) {
        response.render('hallofshame')
    })

    ///////////////////////////////////////////////////////////////////////

    ////////  ROUTES USED FOR COMMENT.HANDLEBARS  ///////////////////////////

    app.get('/textcomments/:id', (request, response) => {
        response.render('comment')
    })

    app.get('/api/textcomments/:id', (request, response) => {
        var textId = request.params.id;
        db.Text.findOne({
            where: { id: textId },
            include: [db.Comment]
        })
            .then((result) => {
                response.json(result)
            })
    })

    app.post('/text/comments/create', (request, response) => {
        var newComment = request.body;
        db.Comment.create(newComment)
            .then((result) => {
                response.json(result)
            })
    })

    app.get('/text/comments', (request, response) => {
        db.Comment.findAll({})
            .then((result) => {
                response.json(result);
            })
    })

    // app.get('api/textfocus/:id', (request, response) => {
    //     var textId = request.params.id;
    //     db.Text.findById(textId, {
    //         include: [db.Comment]
    //     })
    //     .then((result) => {
    //         response.json(result)
    //     })
    // });

    // app.get('/text/comments/:id', (request, response) => {
    //     var textId = request.params.id;
    //     db.Comment.findAll({
    //         where: { textid: textId }
    //     })
    //         .then((result) => {
    //             response.json(result);
    //         })
    // })
    ///////////////////////////////////////////////////////////////////////

    ////////  ROUTES USED FOR SUBMIT  ///////////////////////////

    app.get('/submit-txt-img', (request, response) => {
        response.render('submit');
    })

    app.get('/api/submit-text-img', (request, response) => {
        var loggedInUserId = request.user.id;
        db.Text.findOne({
            where: { userId: loggedInUserId },
            order: [['createdAt', 'DESC']]
        })
            .then((result) => {
                response.json(result);
            })
    })

    app.put('/api/submit-txt-img', (request, response) => {
        var loggedInUserId = request.user.id;
        db.Text.update(request.body,
            {
                where: { id: request.body.id }
            })
            .then((dbText) => {
                response.json(dbText);
            })
    })

    app.post('/submit', (request, response) => {
        response.render('submit')
    })

    var multer = require("multer");
    var handleError = (error, response) => {
        response
            .status(500)
            .contentType("text/plain")
            .end("Something went terribly wrong...");
    };
    var upload = multer({ dest: "public/assets/uploads/" });

    app.post("/upload-text-img", upload.single("file"), (request, response, next) => {
        var extension = path.extname(request.file.originalname).toLowerCase();
        var tempFilePath = request.file.path;
        var newFilePath = path.join("public/assets/uploads/", request.file.filename + extension);

        if (extension === ".png") {
            fs.rename(tempFilePath, newFilePath, error => {
                if (error) return handleError(error, response);
                db.Text.create({
                    image: '/assets/uploads/' + request.file.filename + extension,
                    userId: request.user.id
                })
                    .then((text) => {
                        response.redirect('/submit-txt-img')
                    })
            })
        }
    });


    ////////  ROUTES USED ON HALL OF FAME/HALL OF SHAME.HANDLEBARS  ///////////////////////////

    // app.get("/emojifilter", (request, response) => {
    //     console.log(request);
    // setTimeout(function () {
    // response.redirect("/userhome");
    // var emoji = request.params.emoji;
    //  }, 1000)
    // }
    // )

    // app.get("/userhome/:emoji", (request, response) => {
    //     response.redirect("/userhome")
    // })

}
module.exports = router;