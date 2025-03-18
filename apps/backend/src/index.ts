const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');
import type { Request, Response } from 'express';

// Load environment variables
config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Basic health check route
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
}); 