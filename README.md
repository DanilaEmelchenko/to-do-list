# To-Do List

To-Do List — это веб-приложение для управления задачами, созданное с использованием React, TypeScript, Vite и Material UI.

## 🚀 Технологии

- Vite — быстрый сборщик проекта

- React — библиотека для создания UI

- TypeScript — строгая типизация

- Axios — работа с API

- React Router — маршрутизация

- Redux Toolkit (RTK) — управление состоянием

- Material UI — стилизованные компоненты

## 📦 Установка и запуск
### Клонируйте репозиторий
git clone https://github.com/DanilaEmelchenko/to-do-list.git

### Перейдите в папку проекта
cd to-do-list

### Установите зависимости
npm install  # или yarn install

### Запустите проект
npm run dev  # или yarn dev

## 📡 Работа с API
### Список пользователей загружается с JSONPlaceholder.

import axios from 'axios';

const fetchUsers = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
};
