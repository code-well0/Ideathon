document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const messageDiv = document.getElementById('message');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the form from submitting the default way

        // Get user input
        const businessName = document.getElementById('businessName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Retrieve existing users from localStorage or initialize an empty array
        const users = JSON.parse(localStorage.getItem('d-vsk-users')) || [];

        // Check if the user (email) already exists
        const userExists = users.some(user => user.email === email);

        if (userExists) {
            messageDiv.textContent = 'An account with this email already exists. Please login.';
            messageDiv.style.color = 'red';
        } else {
            // Add the new user to the array
            users.push({ businessName, email, password });

            // Save the updated users array back to localStorage
            localStorage.setItem('d-vsk-users', JSON.stringify(users));

            // Display success message and redirect
            messageDiv.textContent = 'Registration successful! Redirecting to login...';
            messageDiv.style.color = 'green';

            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000); // Redirect after 2 seconds
        }
    });
});