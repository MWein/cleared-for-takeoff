import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from TypeScript API!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
