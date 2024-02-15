import express from 'express';
import { model, Schema, connect } from 'mongoose';
require('dotenv').config();

const app = express();

const uri =
  'mongodb+srv://yashagarwal:' +
  process.env.mongopw +
  '@mern-poc.rildjcz.mongodb.net/?retryWrites=true&w=majority';

connect(uri).then(() => console.log('Mongo DB Connection established!'));

// Interface for the Schema
interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  jobTitle?: string; // Optional field
}

// Schema
const userSchema: Schema<IUser> = new Schema<IUser>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
  },
});

const User = model<IUser>('User', userSchema);

// Middleware
app.use(express.urlencoded({ extended: false }));

const PORT = 3000;

// Custom Middlewares

// all routes
// app.use((req, res, next) => {
//   console.log('Middleware 1');
//   next();
// });

// // specific routes
// app.use('/api/users/:id', (req, res, next) => {
//   console.log('Request Type:', req.method);
//   next();
// });

// HTML
app.get('/users', async (req, res) => {
  const allUsers = await User.find({});
  const html = `
          <ol>
              ${allUsers
                .map(
                  (user: IUser) =>
                    `<li>${user.firstName} ${user.lastName} ${user.email}</li>`,
                )
                .join('')}
          </ol>
      `;
  return res.send(html);
});

// Routes - REST API
app.get('/api/users', async (req, res) => {
  const allUsers = await User.find({});
  return res.json(allUsers);
});

// Dynamic Path Paramters
app
  .route('/api/users/:id')
  .get(async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(401).json({ message: 'Invalid ID' });
      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json({ message: 'Invalid id', err });
    }
  })
  .patch(async (req, res) => {
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
  })
  .delete(async (req, res) => {
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
  });

app.post('/api/users', async (req, res) => {
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
    console.log('User created successfully:', result);
    return res
      .status(201)
      .json({ message: 'User created successfully', user: result });
  } catch (err) {
    return res.status(500).json(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
