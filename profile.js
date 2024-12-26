window.addEventListener('load', function () {
    const currentUser = sessionStorage.getItem('currentUser');
    if (!currentUser) {
        alert('Будь ласка, увійдіть у свій акаунт');
        window.location.href = 'login.html';
        return;
    }
    document.getElementById('username').textContent = `Ласкаво просимо, ${currentUser}!`;
    const messagesData = localStorage.getItem(currentUser) || '';
    const messages = messagesData ? messagesData.split(';;') : [];

    const iframe = document.getElementById('message-frame');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

    iframeDocument.open();
    iframeDocument.write(`
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 20px;
                    background-color: #f9f9f9;
                    color: #333;
                }
                .inframe-message {
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    background-color: #fff;
                    padding: 15px;
                    margin-bottom: 20px;
                }
                .inframe-message h2 {
                    font-size: 20px;
                    color: #1a1a1a;
                    margin-bottom: 10px;
                }
                .inframe-message p {
                    font-size: 16px;
                    line-height: 1.6;
                    margin-bottom: 8px;
                }
            </style>
        </head>
        <body>
            ${messages.join('')}
        </body>
        </html>
    `);
    iframeDocument.close();
});