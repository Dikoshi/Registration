 Система регистрации и авторизации  

Этот проект включает 3 версии системы:  
1. Чистый HTML/JS (работает без сервера через localStorage)  
2. PHP + JSON-файл (эмуляция БД без MySQL)  
3. PHP + MySQL (полноценная база данных)  

---

## 🚀 Вариант 1: HTML/JS (без сервера)  
### Структура файлов  
copy


registration-system-html/
├── index.html          # Страница входа/регистрации
├── dashboard.html      # Личный кабинет
├── js/
│   └── auth.js         # Логика авторизации
└── css/
    └── style.css       # Стили
### Как использовать  
1. Скачайте папку registration-system-html.  
2. Откройте index.html в браузере через Live Server (VS Code) или напрямую.  
3. Данные сохраняются в localStorage браузера.  

> ⚠️ Без Live Server возможны ошибки из-за политики CORS.  

---

## 🐘 Вариант 2: PHP + JSON (без MySQL)  
### Структура файлов  
copy


registration-system-php-json/
├── index.php           # Главная страница
├── register.php        # Обработчик регистрации
├── login.php           # Обработчик входа
├── logout.php          # Выход из системы
├── dashboard.php       # Личный кабинет
├── config.php          # Настройки JSON-«БД»
├── users/
│   └── users.json      # Файл с данными пользователей
└── css/
    └── style.css       # Стили
### Установка  
1. Скопируйте папку на PHP-сервер (XAMPP/OpenServer или php -S localhost:8000).  
2. Дайте права на запись в папку users/:  
  
Bash


   chmod 777 users/
   
3. Откройте в браузере: http://localhost:8000/index.php.  

### Как встроить в свой сайт  
1. Скопируйте все файлы в папку вашего проекта (например, /auth/).  
2. Добавьте ссылку на страницу входа:  
  
Markup


   <a href="/auth/index.php">Вход/Регистрация</a>
   
---

## 🛢️ Вариант 3: PHP + MySQL (полная версия)  
### Требования  
- PHP 7.4+  
- MySQL 5.7+  
- Веб-сервер (Apache/Nginx)  

### Установка  
1. Импортируйте БД из файла database.sql:  
  
SQL


   CREATE TABLE users (
     id INT AUTO_INCREMENT PRIMARY KEY,
     username VARCHAR(50) NOT NULL,
     email VARCHAR(100) NOT NULL UNIQUE,
     password VARCHAR(255) NOT NULL,
     created_at DATETIME DEFAULT CURRENT_TIMESTAMP
   );
   
2. Настройте подключение в config.php:  
  
PHP


   $db = new PDO('mysql:host=localhost;dbname=ваша_бд', 'пользователь', 'пароль');
   
3. Разместите файлы на сервере.  

---

## 🎨 Дизайн  
Цветовая гамма:  
CSS


--primary: #6c63ff;
--secondary: #4d44db;
--dark: #2a2a72;
--light: #f8f9fa;
--accent: #ff6584;
---

## 🔧 Возможные доработки  
- Добавить восстановление пароля.  
- Реализовать капчу.  
- Внедрить JWT-авторизацию.  

---

## 📜 Лицензия  
MIT License. Свободно для использования и модификации.  

---

💡 Совет: Для тестирования PHP-версии без локального сервера используйте [XAMPP](https://www.apachefriends.org/) или [OpenServer](https://ospanel.io/).  
