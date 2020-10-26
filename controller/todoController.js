module.exports = function (app) {

    app.get('/todo', (req, res) => {
        res.render("todo");
    })

    app.post('/todo', (res, req) => {

    })

    app.delete('/todo', (res, req) => {

    })
}