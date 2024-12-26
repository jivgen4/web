currentUser = sessionStorage.getItem('currentUser');
    if (!currentUser) {
        alert('Будь ласка, увійдіть у свій акаунт');
        window.location.href = 'login.html';
    }
document.getElementById('feedback-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !phone || !email || !message) {
        alert('Будь ласка, заповніть усі поля');
        return;
    }

    const feedbackMessage = `
        <div class="inframe-message">
            <h2>Консультація</h2>
            <p><strong>Ім'я:</strong> ${name}</p>
            <p><strong>Телефон:</strong> ${phone}</p>
            <p><strong>Пошта:</strong> ${email}</p>
            <p><strong>Повідомлення:</strong> ${message}</p>
        </div>
    `;


    let messagesData = localStorage.getItem(currentUser) || '';
    let messages = messagesData ? messagesData.split(';;') : [];
    messages.push(feedbackMessage);
    localStorage.setItem(currentUser, messages.join(';;'));

    window.location.href = 'profile.html';
});
