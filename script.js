document.getElementById('register-account-form').addEventListener('submit', function(event){
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

function saveAccountDetails(accountDetails) {
    let userDetails = JSON.parse(localStorage.getItem('userDetails')) || [];
    userDetails.push(accountDetails);
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    console.log('Account details saved successfully, redirecting...');
    location.replace("register-successful.html");
}

function displayuserDetails() {
    const userDetails = JSON.parse(localStorage.getItem('userDetails')) || [];
    const tableBody = document.getElementById('userDetailsTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    userDetails.forEach(accountDetails => {
        const newRow = tableBody.insertRow();

        const usernameCell = newRow.insertCell(0);
        const emailCell = newRow.insertCell(1);
        const passwordCell = newRow.insertCell(2);

        usernameCell.innerHTML = accountDetails.username;
        emailCell.innerHTML = accountDetails.email;
        passwordCell.innerHTML = accountDetails.password;
    });
}