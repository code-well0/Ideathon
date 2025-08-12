document.addEventListener('DOMContentLoaded', () => {

    // Select all action buttons
    const actionButtons = document.querySelectorAll('.action-btn');

    // Function to handle button clicks
    const handleButtonClick = (e) => {
        const buttonText = e.target.innerText;

        if (buttonText === 'Register') {
            window.location.href = 'register.html';
        } else if (buttonText === 'Log In') {
            window.location.href = 'login.html';
        } else if (buttonText === 'Apply for a New License') {
            alert('Redirecting to the license application form...');
            // In a real application, you would redirect:
            // window.location.href = 'apply-license.html';
        } else if (buttonText === 'Track My Application') {
            alert('Redirecting to your application dashboard...');
            // In a real application, you would redirect:
            // window.location.href = 'dashboard.html';
        }
    };

    // Add click listeners to all action buttons
    actionButtons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    // --- Check for logged-in user ---
    const loggedInUserEmail = localStorage.getItem('loggedInUser');
    const navButtonsContainer = document.querySelector('.nav-buttons');

    if (loggedInUserEmail) {
        // User is logged in, change the nav buttons to include Dashboard access
        navButtonsContainer.innerHTML = `
            <span class="welcome-msg">Welcome!</span>
            <button id="dashboardBtn" class="btn btn-secondary">Dashboard</button>
            <button id="logoutBtn" class="btn btn-primary">Logout</button>
        `;

        // Add event listener for the new dashboard button
        document.getElementById('dashboardBtn').addEventListener('click', () => {
            window.location.href = 'dashboard.html';
        });

        // Add event listener for the new logout button
        document.getElementById('logoutBtn').addEventListener('click', () => {
            localStorage.removeItem('loggedInUser'); // Log the user out
            alert('You have been logged out.');
            window.location.reload(); // Refresh the page to show default state
        });
    }

});
