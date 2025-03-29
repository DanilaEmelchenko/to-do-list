To-Do List

 

To-Do List — это веб-приложение для управления задачами, созданное с использованием React, TypeScript, Vite и Material UI.

🚀 Технологии

Vite — быстрый сборщик проекта

React — библиотека для создания UI

TypeScript — строгая типизация

Axios — работа с API

React Router — маршрутизация

Material UI — стилизованные компоненты

📦 Установка и запуск
# Клонируйте репозиторий
git clone https://github.com/your-username/todolist.git

# Перейдите в папку проекта
cd todolist

# Установите зависимости
npm install  # или yarn install

# Запустите проект
npm run dev  # или yarn dev

📡 Работа с API

Список пользователей загружается с JSONPlaceholder.

import axios from 'axios';

const fetchUsers = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
};
