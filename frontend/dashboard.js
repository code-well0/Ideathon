document.addEventListener('DOMContentLoaded', () => {
    // --- Page Protection ---
    // Check if a user is logged in. If not, redirect to the login page.
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
        alert('You must be logged in to view this page.');
        window.location.href = 'login.html';
        return; // Stop further execution
    }

    // --- Logout Functionality ---
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('loggedInUser'); // Log the user out
            alert('You have been logged out.');
            window.location.href = 'index.html'; // Redirect to home
        });
    }

    // --- Populate User Table ---
    const userListBody = document.getElementById('user-list-body');
    const users = JSON.parse(localStorage.getItem('d-vsk-users')) || [];

    if (users.length === 0) {
        // If no users are registered, show a message in the table
        const row = userListBody.insertRow();
        const cell = row.insertCell();
        cell.colSpan = 2; // Make the cell span both columns
        cell.textContent = 'No users have registered yet.';
        cell.style.textAlign = 'center';
    } else {
        // Loop through each registered user and add them to the table
        users.forEach(user => {
            const row = userListBody.insertRow(); // Create a new table row

            // Create and append the business name cell
            const nameCell = row.insertCell();
            nameCell.textContent = user.businessName;

            // Create and append the email cell
            const emailCell = row.insertCell();
            emailCell.textContent = user.email;
        });
    }
});
