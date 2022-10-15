import bcrypt from 'bcrypt';
import user from '../models/user.js';

export const users = async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const createUsers = async (req, res) => {
  const userData = {
    userName: req.body.userName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    password: req.body.password
  };
  try {
    const data = new user(userData);
    const salt = await bcrypt.genSalt(6);
    data.password = await bcrypt.hash(String(data.password), salt);
    await data.save();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const loginUsers = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await user.findOne({
      email
    });

    if (!userData)
      return res.status(400).json({
        message: 'User Not Exist'
      });
    const isMatch = await bcrypt.compare(password, userData.password);
    if (!isMatch)
      return res.status(400).json({
        message: 'Incorrect Password !'
      });
    res.status(200).send('login successfully');
  } catch (error) {
    res.status(400).send(error);
  }
};
