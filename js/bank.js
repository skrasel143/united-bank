// Log in page

document.getElementById('logIn-btn').addEventListener('click', function () {
    const emailInput = document.getElementById('email-input');
    const email = emailInput.value;
    const passwordInput = document.getElementById('password-input');
    const password = passwordInput.value;
    if (email == 'abc@gmail.com' && password == '123456'){
        window.location.href= 'transaction.html';
    }
});
    
