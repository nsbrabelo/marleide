const bcrypt = require('bcrypt');
const { user } = require('../models');

module.exports = () => {
    const _saltRounds = 10;

    const AuthController = {

        genHash: async (text) => {
            if (!text) {
                return undefined;
            }

            return await bcrypt.hash(text, _saltRounds);
        },

        compare: async (text, hash) => {
            if (!text || !hash) {
                return undefined;
            }

            return await bcrypt.compare(text, hash);
        },

        login: (req, res, next) => {
            const sess = req.session;
            user.findOne({
                where: {
                    email: req.body.email
                }
            }).then((userLogin) => {

                AuthController.compare(req.body.password, userLogin.password).then((compare) => {
                    console.log('compare: ', compare);
                    if (compare) {
                        sess.user = userLogin;
                        res.redirect('/users');
                    } else {
                        res.send(req.body);
                    }
                });
            });
        },

        logOut: (req, res, next) => {
            delete req.session.user
            res.redirect('/');
        }
    };

    return AuthController;
}
