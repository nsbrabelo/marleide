module.exports = (app) => {
  const UserController = {
    list: (req, res) => {
      res.send('respond with a resource of controller');
    }
  };

  return UserController;
}
