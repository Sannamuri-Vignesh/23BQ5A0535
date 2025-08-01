const express = require('express');
const { setAccessToken, Log } = require('../logging-middleware');

const app = express();
const PORT = 5000;

// Replace with your actual Access Token received from auth API
const ACCESS_TOKEN = '<YOUR_ACCESS_TOKEN_HERE>';

setAccessToken(ACCESS_TOKEN);

app.use(express.json());

// Sample route to test logging middleware
app.get('/test-log', async (req, res) => {
  await Log('backend', 'info', 'handler', 'Test log route accessed');
  res.send('Test log sent successfully!');
});

// Example: log error scenario
app.get('/test-error', async (req, res) => {
  await Log('backend', 'error', 'handler', 'Received string, expected bool');
  res.status(400).send('Error log sent');
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
