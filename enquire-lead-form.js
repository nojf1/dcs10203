document.addEventListener('DOMContentLoaded', function () {

    const form = document.querySelector('.enquire-form-container');

    form.addEventListener('submit', function (event) {

        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const newsletter = document.getElementById('newsletter').checked;

        if (name === '' || email === '') {
            alert('Please fill in all required fields.');
            return;
        }

        const formData = {
            name: name,
            email: email,
            newsletter: newsletter
        };

        saveFormData(formData);

        form.reset();

        alert('Thank you for your enquiry! Your information has been saved.');
    });

    function saveFormData(data) {
        let enquiries = JSON.parse(localStorage.getItem('enquiries')) || [];
        enquiries.push(data);
        localStorage.setItem('enquiries', JSON.stringify(enquiries));
    }
});
