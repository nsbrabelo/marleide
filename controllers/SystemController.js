module.exports = (app) => {
  const SystemController = {
    home: (req, res) => {
      res.render('index', { title: 'Jason Express' });
    },

    dashboard: (req, res) => {
      res.render('index', { title: 'Dashboard' });
    }
  };

  return SystemController;
}
