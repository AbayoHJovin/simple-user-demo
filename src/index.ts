import express, { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

interface User {
  id: string;
  name: string;
  email: string;
}

const app = express();
const port = 3000;

// In-memory storage
const users: User[] = [];

app.use(express.json());

// POST /users
app.post('/users', (req: Request, res: Response) => {
  const { name, email } = req.body;

  // Validate input
  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Name is required and must be a string' });
  }
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  const user: User = {
    id: uuidv4(),
    name,
    email,
  };

  users.push(user);
  res.status(201).json(user);
});

// GET /users/:id
app.get('/users/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});