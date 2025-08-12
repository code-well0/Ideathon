document.addEventListener('DOMContentLoaded', () => {
    // --- Page Protection ---
    const loggedInUserEmail = localStorage.getItem('loggedInUser');
    if (!loggedInUserEmail) {
        alert('You must be logged in to apply for a license.');
        window.location.href = 'login.html';
        return; // Stop further execution
    }

    // --- Logout Functionality ---
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('loggedInUser');
            alert('You have been logged out.');
            window.location.href = 'index.html';
        });
    }

    // --- Pre-fill Business Name ---
    const users = JSON.parse(localStorage.getItem('d-vsk-users')) || [];
    const currentUser = users.find(user => user.email === loggedInUserEmail);
    const businessNameInput = document.getElementById('businessName');
    if (currentUser && businessNameInput) {
        businessNameInput.value = currentUser.businessName;
    }

    // --- Form Submission Logic ---
    const licenseForm = document.getElementById('license-form');
    const messageDiv = document.getElementById('message');

    if (licenseForm) {
        licenseForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual form submission

            // Simple validation check
            const licenseType = document.getElementById('licenseType').value;
            const documentUpload = document.getElementById('documentUpload').value;

            if (!licenseType || !documentUpload) {
                messageDiv.textContent = 'Please fill out all required fields.';
                messageDiv.style.color = 'red';
                return;
            }
            
            // Simulate a successful submission
            messageDiv.textContent = 'Application submitted successfully! Your application ID is DVSK' + Date.now() + '. You will be redirected to the dashboard.';
            messageDiv.style.color = 'green';
            
            // Disable the form to prevent multiple submissions
            licenseForm.querySelector('button').setAttribute('disabled', 'true');

            // Redirect to dashboard after a delay
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 3000);
        });
    }
});
