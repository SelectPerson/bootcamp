const UserRepository = require('../repositories/user');

class UserService {
    async getClients() {
        return UserRepository.findAll({ type: 'client' });
    }

    async getAdmins() {
        return UserRepository.findAll({ type: 'admin' });
    }
}

module.exports = new UserService();