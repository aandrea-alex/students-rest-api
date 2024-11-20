import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello world!',
  });
});

app.use('*', (req, res, next) => {
  res.status(404).json({
    message: 'Route not found',
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    message: 'Something went wrong',
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
