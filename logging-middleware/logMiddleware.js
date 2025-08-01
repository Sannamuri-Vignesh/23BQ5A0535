
const fetch = require('node-fetch'); // If using Node.js v18+, native fetch is available

const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyM2JxNWEwNTM1QHZ2aXQubmV0IiwiZXhwIjoxNzU0MDI4MjQ2LCJpYXQiOjE3NTQwMjczNDYsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIxZTgxODMwZS0yZDgyLTRmYzMtOTFlMS03NDA4OTNhZDgwNjgiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJ2aWduZXNoIHNhbm5hbXVyaSIsInN1YiI6IjI5OThkODAwLWQ4ZmUtNDMyNC05YmY1LWYxZjZlZGM4MGE0MyJ9LCJlbWFpbCI6IjIzYnE1YTA1MzVAdnZpdC5uZXQiLCJuYW1lIjoidmlnbmVzaCBzYW5uYW11cmkiLCJyb2xsTm8iOiIyM2JxNWEwNTM1IiwiYWNjZXNzQ29kZSI6IlBuVkJGViIsImNsaWVudElEIjoiMjk5OGQ4MDAtZDhmZS00MzI0LTliZjUtZjFmNmVkYzgwYTQzIiwiY2xpZW50U2VjcmV0IjoiYVZFbXZCaGJHUllxQnpVTiJ9.r10CjiJwlMmMbJ88HotvX9VSNaZ4ejFjy5w9cGkglcQ';

async function log(stack, level, pkg, message) {
  const url = 'http://20.244.56.144/evaluation-service/logs';

  const body = {
    stack: stack.toLowerCase(),
    level: level.toLowerCase(),
    package: pkg.toLowerCase(),
    message,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.error('Failed to send log:', response.statusText);
      return;
    }

    const data = await response.json();
    console.log('Log sent successfully:', data);
  } catch (error) {
    console.error('Error sending log:', error);
  }
}

module.exports = log;
