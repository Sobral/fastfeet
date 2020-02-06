import User from '../models/User';

export default async (request, response, next) => {
  const id = request.UserID;

  const user = await User.findOne({ id });

  if (!user && !user.admin) {
    return response.status(401).json({ error: 'Unauthorized resquest.' });
  }

  return next();
};
