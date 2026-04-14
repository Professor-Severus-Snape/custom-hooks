import express from 'express';
import cors from 'cors';

const app = express(); // создаём объект приложения Express
app.use(cors()); // разрешаем запросы с других доменов
app.use(express.json()); // парсим JSON из тела запроса (request.body)

// проверка подключения к серверу:
app.get('/ping', (_request, response) => {
  response.status(204).end();
});

// обработка удачного get-запроса:
app.get('/success', (_request, response) => {
  response.status(200).json({
    status: 'ok',
    message: 'success',
  });
});

// обработка ошибочного get-запроса:
app.get('/error', (_request, response) => {
  response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

// обработка get-запроса с ожиданием:
app.get('/loading', async(_request, response) => {
  await new Promise((resolve) => setTimeout(resolve, 5000)); // имитация задержки ответа

  response.status(200).json({
    status: 'ok',
    message: 'loaded',
  });
});

const port = process.env.PORT || 7070;

app
  .listen(port, () => {
    console.log(`Server running on port ${port}`);
  })
  .on('error', console.error);
