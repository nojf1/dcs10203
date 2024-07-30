document.addEventListener('DOMContentLoaded', function () {
    displayUserDetails();

    // Add event listener for the user details form submission
    document.getElementById('userDetailsForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const address = document.getElementById('address').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const country = document.getElementById('country').value.trim();
        const course = document.getElementById('course').value;

        if (username === '' || email === '' || password === '' || address === '' || phone === '' || country === '' || course === '') {
            alert('Please fill in all fields.');
            return;
        }

        const userDetails = JSON.parse(localStorage.getItem('userDetails')) || [];
        const existingUserIndex = userDetails.findIndex(user => user.email === email);

        if (existingUserIndex > -1) {
            userDetails[existingUserIndex] = { username, email, password, address, phone, country, course };
        } else {
            userDetails.push({ username, email, password, address, phone, country, course });
        }

        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        displayUserDetails();
        document.getElementById('userDetailsForm').reset();
    });

    // Function to display user details
    function displayUserDetails() {
        const userDetails = JSON.parse(localStorage.getItem('userDetails')) || [];
        const tableBody = document.getElementById('userDetailsTable').getElementsByTagName('tbody')[0];
        tableBody.innerHTML = '';

        userDetails.forEach((accountDetails, index) => {
            const newRow = tableBody.insertRow();

            const usernameCell = newRow.insertCell(0);
            const emailCell = newRow.insertCell(1);
            const passwordCell = newRow.insertCell(2);
            const addressCell = newRow.insertCell(3);
            const phoneCell = newRow.insertCell(4);
            const countryCell = newRow.insertCell(5);
            const courseCell = newRow.insertCell(6);
            const actionCell = newRow.insertCell(7);

            usernameCell.innerHTML = accountDetails.username;
            emailCell.innerHTML = accountDetails.email;
            passwordCell.innerHTML = accountDetails.password;
            addressCell.innerHTML = accountDetails.address;
            phoneCell.innerHTML = accountDetails.phone;
            countryCell.innerHTML = accountDetails.country;
            courseCell.innerHTML = accountDetails.course;
            actionCell.innerHTML = `
                <div class="actions">
                    <button id="button-white" onclick="editUser(${index})">Edit</button>
                    <button id="button-black" onclick="deleteUser(${index})">Delete</button>
                </div>
            `;
        });
    }

    // Function to edit user details
    window.editUser = function (index) {
        const userDetails = JSON.parse(localStorage.getItem('userDetails')) || [];
        const user = userDetails[index];

        document.getElementById('username').value = user.username;
        document.getElementById('email').value = user.email;
        document.getElementById('password').value = user.password;
        document.getElementById('address').value = user.address;
        document.getElementById('phone').value = user.phone;
        document.getElementById('country').value = user.country;
        document.getElementById('course').value = user.course;
    };

    // Function to delete user details
    window.deleteUser = function (index) {
        let userDetails = JSON.parse(localStorage.getItem('userDetails')) || [];
        userDetails.splice(index, 1);
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        displayUserDetails();
    };
});