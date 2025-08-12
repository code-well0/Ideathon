document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const messageDiv = document.getElementById('message');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        // Get user input
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Retrieve users from localStorage
        const users = JSON.parse(localStorage.getItem('d-vsk-users')) || [];

        // Find the user with matching credentials
        const foundUser = users.find(user => user.email === email && user.password === password);

        if (foundUser) {
            // Credentials are correct
            messageDiv.textContent = 'Login successful! Redirecting...';
            messageDiv.style.color = 'green';

            // Set a flag in localStorage to indicate the user is logged in
            localStorage.setItem('loggedInUser', foundUser.email);

            // Redirect to the main page after a short delay
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500); // Redirect after 1.5 seconds

        } else {
            // Credentials are incorrect
            messageDiv.textContent = 'Invalid email or password. Please try again.';
            messageDiv.style.color = 'red';
        }
    });
});