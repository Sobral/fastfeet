import User from '../models/User';

class UserController {
  async index(request, response) {
    const users = await User.findAll({
      attributes: ['id', 'name', 'email', 'admin'],
    });

    return response.status(200).json(users);
  }

  async show(request, response) {
    const { id } = request.params;

    const user = await User.findOne({
      where: { id },
      attributes: ['id', 'name', 'email', 'admin'],
    });

    if (!user) {
      return response.status(401).json({ error: 'User not found!' });
    }

    return response.status(200).json(user);
  }
}

export default new UserController();
