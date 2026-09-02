import express from 'express';

const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  return res.status(200).json({
    message: 'Login route ready',
    user: { email },
  });
});

export default router;
