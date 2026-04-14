[![Client CI/CD](https://github.com/professor-severus-snape/custom-hooks/actions/workflows/client.yml/badge.svg)](https://github.com/professor-severus-snape/custom-hooks/actions/workflows/client.yml)
[![Server CI/CD](https://github.com/professor-severus-snape/custom-hooks/actions/workflows/server.yml/badge.svg)](https://github.com/professor-severus-snape/custom-hooks/actions/workflows/server.yml)

# Custom Hooks

Простое демонстрационное приложение для работы с кастомными хуками в React.

Приложение показывает работу хука `useJsonFetch`, который выполняет HTTP-запросы и возвращает состояние загрузки, данные и ошибки.  
Также используется хук `usePing` для проверки доступности сервера перед загрузкой интерфейса.

## Демо

Посмотреть демо можно [здесь](https://professor-severus-snape.github.io/custom-hooks/).

## Возможности

- Проверка доступности сервера при запуске приложения через кастомный хук `usePing`
- Выполнение HTTP-запросов через кастомный хук `useJsonFetch`
- Обработка состояний (загрузка, успешный ответ, ошибка)
- Отображение разных сценариев ответа сервера (success, error, loading)
- Повторная попытка подключения к серверу

## Технологии

- React 19
  - JSX
  - functional components
  - props
  - useState, useEffect
  - custom hooks
  - обработка событий
- типизация - TypeScript
- линтинг - ESLint
- сборка - Vite
- Node.js, Express
- REST API

## CI/CD

- GitHub Actions — линтинг и сборка клиентской и серверной частей приложения
- GitHub Pages — деплой клиентской части приложения
- Render.com — хостинг серверной части приложения

## Архитектура

Приложение построено по клиент-серверной архитектуре.

- Клиент выполняет HTTP-запросы через кастомные хуки
- Сервер возвращает JSON-ответы для различных сценариев (success, error, loading)

## Структура проекта

- `client/` — клиентская часть (frontend)
- `server/` — серверная часть (backend)

## Документация

- [Frontend](./client/README.md)
- [Backend](./server/README.md)
