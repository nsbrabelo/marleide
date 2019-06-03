const { user } = require('../models');

module.exports = (app) => {
  const Security  = app.controllers.AuthController;
  const UserController = {
    list: (req, res) => {
      user.findAll().then((users) => {
        res.render('user/list', { users: users, session: req.session.user });
      })
      .catch((e) => {
        console.log(e);
      });
    },
    create: async (req, res) => {
      const teste = await user.create({
        name: 'Jason',
        home_number: 55,
        email: 'jasonaries@gmail.com',
        password: await Security.genHash('q1w2e3r4t5')
      });
      res.send(teste);
    }
  };

  return UserController;
}
