



app.put('/api/text/:id', function (request, response) {
        var textId = request.params.id;
        db.Text.update(request.body,
            { where: {
                id: request.params.id}
            })
            .then(function (dbText) {
                response.json(dbText);
            })

    });