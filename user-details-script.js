// Function to display user details
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

document.addEventListener('DOMContentLoaded', displayuserDetails);