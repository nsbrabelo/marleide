module.exports = (app) => {
    const AuthController = app.controllers.AuthController;

    app.get('/login', (req, res, next) => {
        res.render('auth/login');
    });

    app.post('/login', AuthController.login);
    app.get('/logout', AuthController.logOut);
}