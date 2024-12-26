let currentUser = sessionStorage.getItem('currentUser');
let authButton = document.getElementById('auth-button');

if (currentUser) {
    authButton.innerHTML = '<a href="profile.html">Профіль</a>';
} 
else {
    authButton.innerHTML = '<a href="login.html">Вхід</a>';
}