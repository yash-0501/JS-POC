import { Request, Response } from 'express';
import { User } from './user.models';
import { createUserSchema, loginUserSchema } from './users.zodSchema';
import { ZodError } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import { setUser } from '../service/auth';

const handleGetUsers = async (req: Request, res: Response) => {
  const allUsers = await User.find({});
  // console.log(allUsers);
  if (allUsers.length < 1)
    return res.json({ message: 'No users currently! Be the first one!' });
  return res.json(allUsers);
};

const handleUserSignup = async (req: Request, res: Response) => {
  const { name, email, password, confirm } = req.body;
  try {
    const parsedUser = await createUserSchema.parseAsync({
      name,
      email,
      password,
      confirm,
    });
    // console.log('parsedUser');
    try {
      const user = await User.create(parsedUser);
      return res.status(200).json({ isLoggedIn: true, user: user });
    } catch (err) {
      res.status(500).json({ message: 'Some Error Occured', err });
    }
  } catch (err) {
    if (err instanceof ZodError) {
      // console.log(err);
      const errorMessage = err.errors.map((err) => err.message).join(', ');
      return res
        .status(404)
        .json({ error: errorMessage, message: 'Some error occurred' });
    } else return res.status(404).json({ message: 'Some Error Occured', err });
  }
};

const handleUserLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const parsedUser = loginUserSchema.parse({
      email,
      password,
    });
    try {
      const user = await User.findOne(parsedUser);
      if (!user)
        return res
          .status(401)
          .json({ isLoggedIn: false, message: 'Invalid Credentials!' });
        const token = setUser(user);
        // res.cookie("uid",token);
      return res.json({  token });
    } catch (err) {
      res.status(500).json({ message: 'Some Error Occured', err });
    }
  } catch (err) {
    if (err instanceof ZodError) {
      // console.log(err);
      const errorMessage = err.errors.map((err) => err.message).join(', ');
      return res
        .status(404)
        .json({ error: errorMessage, message: 'Some error occurred' });
    } else return res.status(404).json({ message: 'Some Error Occured', err });
  }
};

export { handleUserSignup, handleGetUsers, handleUserLogin };
