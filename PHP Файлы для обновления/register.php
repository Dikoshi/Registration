<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username']);
    $email = trim($_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // Проверяем, нет ли уже такого пользователя
    $users = getUsers();
    foreach ($users as $user) {
        if ($user['email'] === $email) {
            die("Пользователь с таким email уже существует!");
        }
    }

    // Сохраняем нового пользователя
    saveUser([
        'username' => $username,
        'email' => $email,
        'password' => $password,
        'created_at' => date('Y-m-d H:i:s')
    ]);

    // Перенаправляем на страницу успеха
    header('Location: index.php?success=1');
    exit;
}
?>