module.exports = (app) => {

  const user = app.controllers.UserController;
  /* GET users listing. */
  app.get('/user', user.list);
  app.get('/user/create', (req, res, next) => {
    res.render('user/register');
  });
  app.post('/user/create', user.create);

}
