document.addEventListener('DOMContentLoaded', function () {
    // Select the form element
    const form = document.querySelector('form');

    // Add an event listener for the form submit event
    form.addEventListener('submit', function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get form field values
        const course = document.querySelector('.course-register-dropdown-toggle').textContent.trim();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();
        const country = document.getElementById('country').value.trim();
        const terms = document.getElementById('terms').checked;

        // Simple validation
        if (course === 'Select a Course' || name === '' || email === '' || phone === '' || address === '' || country === '' || !terms) {
            alert('Please fill in all required fields and agree to the terms and conditions.');
            return;
        }

        // Create an object to store form data
        const formData = {
            course: course,
            name: name,
            email: email,
            phone: phone,
            address: address,
            country: country
        };

        // Save form data to local storage
        saveFormData(formData);

        // Clear the form after submission
        form.reset();
        document.querySelector('.course-register-dropdown-toggle').innerHTML = 'Select a Course <img src="chevron-down.svg" alt="chevron-down">';

        // Provide user feedback
        alert('Thank you for registering! Your information has been saved.');
    });

    // Function to save form data to local storage
    function saveFormData(data) {
        let registrations = JSON.parse(localStorage.getItem('registrations')) || [];
        registrations.push(data);
        localStorage.setItem('registrations', JSON.stringify(registrations));
    }
});
