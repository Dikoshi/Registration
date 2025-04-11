<?php
// Настройки "файловой БД"
define('DB_FILE', DIR . '/users/users.json');

// Создаем файл, если его нет
if (!file_exists(DB_FILE)) {
    file_put_contents(DB_FILE, json_encode([]));
}

// Функция для получения всех пользователей
function getUsers() {
    return json_decode(file_get_contents(DB_FILE), true) ?: [];
}

// Функция для сохранения пользователя
function saveUser($user) {
    $users = getUsers();
    $users[] = $user;
    file_put_contents(DB_FILE, json_encode($users, JSON_PRETTY_PRINT));
}
?>