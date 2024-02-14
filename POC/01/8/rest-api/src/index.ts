import express from 'express';
import fs from 'fs';

const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));

const users = require('../data.json');

const PORT = 3000;

type User = {
  readonly id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  job_title?: string;
};

// HTML
app.get('/users', (req, res) => {
  const html = `
        <ol>
            ${users
              .map(
                (user: User) => `<li>${user.first_name} ${user.last_name}</li>`,
              )
              .join('')}
        </ol>
    `;
  return res.send(html);
});

// Routes - REST API
app.get('/api/users', (req, res) => {
  return res.json(users);
});

// Dynamic Path Paramters
app
  .route('/api/users/:id')
  .get((req, res) => {
    const id = Number(req.params.id);
    const user: User = users.find((user: User) => user.id === id);
    if (!user) {
      // User with the specified id was not found
      return res.status(404).json({ error: 'Invalid id' });
    }
    console.log(user);
    return res.status(200).json(user);
  })
  .patch((req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    const userIndex = users.findIndex((user: User) => user.id === id);
    if (userIndex == -1) {
      // User with the specified id was not found
      return res.status(404).json({ error: 'Invalid User ID' });
    }

    // Validate if any unexpected fields are present in the request body
    const unexpectedFields = Object.keys(body).filter(
      (key) => !(key in users[userIndex]),
    );
    
    if (unexpectedFields.length > 0) {
      return res
        .status(400)
        .json({
          error: `Unexpected fields in request body: ${unexpectedFields.join(
            ', ',
          )}`,
        });
    }

    // Check if 'id' field is included in the request body
    if ('id' in body) {
        return res.status(400).json({ error: 'Cannot change user ID' });
    }

    users[userIndex] = { ...users[userIndex], ...body };

    fs.writeFile('./data.json', JSON.stringify(users), (err) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ error: 'Failed to write to file\n', err });
      } else {
        console.log('User updated successfully:', users[userIndex]);
        return res
          .status(200)
          .json({ status: 'User updated successfully', id: id });
      }
    });
  })
  .delete((req, res) => {
    const userId = Number(req.params.id);

    // Find the index of the user by ID
    const userIndex = users.findIndex((user: User) => user.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    // Remove the user from the users array
    users.splice(userIndex, 1);

    // Write users array to file
    fs.writeFile("./data.json", JSON.stringify(users), (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to write to file' });
        } else {
            console.log('User deleted successfully');
            return res.status(200).json({ status: 'User deleted successfully' });
        }
    });
  });

app.post('/api/users', (req, res) => {
  const body = req.body;
  const requiredFields: Array<keyof User> = [
    'first_name',
    'last_name',
    'email',
    'gender',
  ];
  const missingFields = requiredFields.filter((field) => !(field in body));

  if (missingFields.length > 0) {
    return res
      .status(400)
      .json({ error: `Missing required fields: ${missingFields.join(', ')}` });
  }
  const newUser: User = { ...body, id: users.length + 1 };
  users.push(newUser);
  fs.writeFile('./data.json', JSON.stringify(users), (err) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: err });
    } else {
      return res.status(200).json({ status: 'Success!', id: newUser.id });
    }
  });
});

// app.patch("/api/users/:id", (req,res)=>{
//     return res.status(501).json({status: "Pending"});
// })

// app.delete("/api/users/:id", (req,res)=>{
//     return res.status(501).json({status: "Pending"});
// })

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
