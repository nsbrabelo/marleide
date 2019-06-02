const bcrypt = require('bcrypt');

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
        }
    };

    return AuthController;
}
