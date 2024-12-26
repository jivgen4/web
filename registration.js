const registerForm = document.getElementById('register-form');

        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const login = document.getElementById('login').value.trim();
            const password = document.getElementById('password').value.trim();
            const passwordConfirm = document.getElementById('password_confirm').value.trim();

            if (!login || !password || !passwordConfirm) {
                alert('Будь ласка, заповніть усі поля');
                return;
            }

    
            if (password !== passwordConfirm) {
                alert('Паролі не співпадають');
                return;
            }

    
            let usersData = localStorage.getItem('users') || '';
            let users = usersData ? usersData.split(',') : [];

            if (users.some(user => user.split(':')[0] === login)) {
                alert('Користувач з таким логіном вже існує');
                return;
            }

            users.push(`${login}:${password}`);
            localStorage.setItem('users', users.join(','));
            alert('Реєстрація успішна! Вас буде перенаправлено на сторінку входу.');

            window.location.href = 'login.html';
        });