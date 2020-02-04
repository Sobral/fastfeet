import * as Yup from 'yup';

import User from '../models/User';

class UserController {
  async index(request, response) {
    const users = await User.findAll({
      attributes: ['id', 'name', 'email', 'admin'],
    });

    return response.status(200).json(users);
  }

  async show(request, response) {
    const schema = Yup.object().shape({
      id: Yup.number(),
    });

    const schemaValid = await schema.isValid(request.params);

    if (!schemaValid) {
      return response
        .status(400)
        .json({ error: 'User params should be a number.' });
    }
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

  async store(request, response) {
    const user = await User.findOne({ where: { email: request.body.email } });

    if (user) {
      return response
        .status(401)
        .json({ error: `e-mail ${user.email} is not available.` });
    }

    const { id, name, email, admin } = await User.create(request.body);

    return response.status(201).json({ id, name, email, admin });
  }
}

export default new UserController();
