import express from 'express';

const server = express();

server.get('/', (request, response) => {
  return response.json({ message: 'Bora resolver o desafio 02' });
});
