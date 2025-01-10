document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let isValid = true;
    
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');

    const username = document.getElementById('username');
    if (username.value.trim() === '') {
        document.getElementById('usernameError').textContent = 'Имя пользователя не может быть пустым.';
        isValid = false;
    }

    const email = document.getElementById('email');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value.trim())) {
        document.getElementById('emailError').textContent = 'Введите корректный email.';
        isValid = false;
    }

    const password = document.getElementById('password');
    if (password.value.length < 6) {
        document.getElementById('passwordError').textContent = 'Пароль должен быть не менее 6 символов.';
        isValid = false;
    }

    const confirmPassword = document.getElementById('confirmPassword');
    if (confirmPassword.value !== password.value) {
        document.getElementById('confirmPasswordError').textContent = 'Пароли не совпадают.';
        isValid = false;
    }

    if (isValid) {
        alert('Форма успешно отправлена!');
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');

    const email = document.getElementById('email');
    const password = document.getElementById('password');
    
    if (email.value.trim() === '') {
        document.getElementById('emailError').textContent = 'Введите ваш email.';
        isValid = false;
    }
    
    if (password.value.trim() === '') {
        document.getElementById('passwordError').textContent = 'Введите ваш пароль.';
        isValid = false;
    }

    if (isValid) {
        alert('Вход успешен!');
    }
});
