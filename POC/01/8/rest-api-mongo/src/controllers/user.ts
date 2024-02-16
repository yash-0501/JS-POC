import { User } from '../models/user';
import { Request, Response } from 'express';

async function handleGetAllUsers(req: Request, res: Response) {
  const allUsers = await User.find({});
  return res.status(200).json(allUsers);
}

async function handleGetUserById(req: Request, res: Response) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(400).json({ message: 'Invalid ID' });
    return res.send(user);
  } catch (err) {
    return res.status(400).json({ message: 'Invalid id', err });
  }
}

async function handleUpdateUserById(req: Request, res: Response) {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) return res.status(400).json({ message: 'Invalid ID' });
    return res.status(200).json(user);
  } catch (err) {
    if (err instanceof Error) return res.status(404).json({ message: err });
    else return res.status(404).json({ message: 'Some Error Occured' });
  }
}

async function handleDeleteUserById(req: Request, res: Response) {
  try {
    const user = await User.findByIdAndDelete(req.params.id, {
      returnOriginal: true,
    });
    if (!user) return res.status(400).json({ message: 'Invalid ID' });
    res.status(200).json({ status: 'User deleted Successfully!', user });
  } catch (err) {
    if (err instanceof Error) res.status(401).json({ message: err.message });
    else res.status(500).json({ message: 'Internal Error Occured' });
  }
}

const handleCreateNewUser = async (req: Request, res: Response) => {
  const body = req.body;
  const requiredFields = ['first_name', 'last_name', 'email', 'gender'];
  const missingFields = requiredFields.filter((field) => !(field in body));

  if (missingFields.length > 0) {
    return res
      .status(400)
      .json({ error: `Missing required fields: ${missingFields.join(', ')}` });
  }
  const email = body.email;
  const doesEmailExist = await User.findOne({ email });
  if (doesEmailExist) {
    return res.status(401).json({ error: 'Email already exists' });
  }
  try {
    const result = await User.create({
      firstName: body.first_name,
      lastName: body.last_name,
      gender: body.gender,
      email: body.email,
      jobTitle: body.job_title,
    });
    // Handle success

    return res
      .status(201)
      .json({ message: 'User created successfully', user: result._id });
  } catch (err) {
    return res.status(500).json(err);
  }
};

export {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
};
