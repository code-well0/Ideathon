document.addEventListener('DOMContentLoaded', () => {

    const actionButtons = document.querySelectorAll('.action-btn');

    const handleButtonClick = (e) => {
        const buttonText = e.target.innerText;

        if (buttonText === 'Register') {
            window.location.href = 'register.html';
        } else if (buttonText === 'Log In') {
            window.location.href = 'login.html';
        } else if (buttonText === 'Apply for a D-VSK Smart License') {
            window.location.href = 'apply-license.html';
        } else if (buttonText === 'Track My Application') {
            // This line is the fix. It now points to the correct page.
            window.location.href = 'track-application.html';
        }
    };

    actionButtons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    // This part handles the login/logout display in the navigation bar.
    const loggedInUserEmail = localStorage.getItem('loggedInUser');
    const navButtonsContainer = document.querySelector('.nav-buttons');

    if (loggedInUserEmail) {
        navButtonsContainer.innerHTML = `
            <span class="welcome-msg">Welcome!</span>
            <button id="dashboardBtn" class="btn btn-secondary">Dashboard</button>
            <button id="logoutBtn" class="btn btn-primary">Logout</button>
        `;

        document.getElementById('dashboardBtn').addEventListener('click', () => {
            window.location.href = 'dashboard.html';
        });

        document.getElementById('logoutBtn').addEventListener('click', () => {
            localStorage.removeItem('loggedInUser');
            alert('You have been logged out.');
            window.location.reload();
        });
    }
});
