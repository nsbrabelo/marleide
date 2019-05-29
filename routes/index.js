module.exports = (app) => {

const system = app.controllers.SystemController;
  /* GET home page. */
  app.get('/', system.home);
  app.get('/dashboard', system.dashboard);

}
