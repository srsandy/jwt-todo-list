import User from "../models/User.js";

export const createUser = async (user) => {
  const _user = new User(user);
  await User.create(_user);
  return _user.save();
};

export const doesUserExistsWithProperty = (key, value) =>
  User.exists({ [key]: value });

export const findUserByProperty = (key, value) =>
  User.findOne({ [key]: value });
