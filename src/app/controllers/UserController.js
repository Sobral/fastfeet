import User from '../models/User';

class UserController {
  async index(request, response) {
    const users = await User.findAll({
      attributes: ['id', 'name', 'email', 'admin'],
    });

    return response.status(200).json(users);
  }
}

export default new UserController();
