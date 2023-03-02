const jwt =  require('jsonwebtoken');
const config = require('config');

class TokenService {
    static generate(payload) {
        const accessToken = jwt.sign({payload:payload}, config.get('accessSecret'), {
            expiresIn: '24h'
        });
        return {accessToken};
    }

}

module.exports = TokenService;