module.exports = app => {
    app.post('/signin', app.api.auth.signin)
}