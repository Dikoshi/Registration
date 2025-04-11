const DB_KEY = 'users';

function getUsers() {
    return JSON.parse(localStorage.getItem(DB_KEY)) || [];
}

function saveUser(user) {
    const users = getUsers();
    users.push(user);
    localStorage.setItem(DB_KEY, JSON.stringify(users));
}

function findUserByEmail(email) {
    return getUsers().find(user => user.email === email);
}

// Регистрация
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    if (findUserByEmail(email)) {
        alert('Пользователь с таким email уже существует!');
        return;
    }

    saveUser({
        username,
        email,
        password: btoa(password), // Простое "шифрование" (небезопасно!)
    });

    alert('Регистрация успешна! Теперь войдите.');
    document.querySelector('.tab-btn[data-tab="login"]').click();
});

// Вход
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const user = findUserByEmail(email);

    if (!user || atob(user.password) !== password) {
        alert('Неверный email или пароль!');
        return;
    }

    localStorage.setItem('currentUser', JSON.stringify(user));
    window.location.href = 'dashboard.html';
});