const { users } = require('../database');

class UserRepository {
    static async findAll({ type } = {}) {
        return type ? users.filter(u => u.type === type) : users;
    }
}

module.exports = UserRepository;