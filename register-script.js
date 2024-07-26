// Function to save account details
function saveAccountDetails(accountDetails) {
    let userDetails = JSON.parse(localStorage.getItem('userDetails')) || [];
    userDetails.push(accountDetails);
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    console.log('Account details saved successfully, redirecting...');
    window.location.href = "register-successful.html"; // Use window.location.href for redirection
}

// Register form submission
document.getElementById('register-account-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const accountDetails = {
        username: username,
        email: email,
        password: password
    };

    saveAccountDetails(accountDetails);
    displayuserDetails();
    document.getElementById('register-account-form').reset();
});
