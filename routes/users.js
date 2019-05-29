module.exports = (app) => {

  const user = app.controllers.UserController;
  /* GET users listing. */
  app.get('/user', user.list);

}
