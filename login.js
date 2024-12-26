const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const login = document.getElementById('login').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!login || !password) {
        alert('Будь ласка, введіть логін і пароль');
        return;
    }

    let usersData = localStorage.getItem('users') || '';
    let users = usersData ? usersData.split(',') : [];

    const user = users.find(user => user.split(':')[0] === login && user.split(':')[1] === password);
    
    if (user) {
        alert('Вхід успішний!');
        sessionStorage.setItem('currentUser', login);
        window.location.href = '../pages/profile.html';
    } else {
        alert('Невірний логін або пароль');
    }
});
