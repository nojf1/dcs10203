// Sign-in form submission
document.querySelector('.sign-in').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userDetails = JSON.parse(localStorage.getItem('userDetails')) || [];

    const user = userDetails.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Sign-in successful!');
        window.location.href = "login-successful.html"; // Use window.location.href for redirection
    } else {
        alert('Invalid email or password. Please try again.');
    }
});