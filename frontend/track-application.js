document.addEventListener('DOMContentLoaded', () => {
    // --- Page Protection ---
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
        alert('You must be logged in to track an application.');
        window.location.href = 'login.html';
        return;
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

    // --- Form Submission Logic ---
    const trackingForm = document.getElementById('tracking-form');
    const resultDiv = document.getElementById('tracking-result');
    const appIdInput = document.getElementById('applicationId');

    trackingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const applicationId = appIdInput.value.trim();

        if (!applicationId) {
            alert('Please enter an Application ID.');
            return;
        }

        // --- Simulate finding a status ---
        // In a real app, this would be an API call. Here, we'll just generate a random status.
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `<p>Searching for status of <strong>${applicationId}</strong>...</p>`;

        setTimeout(() => {
            const statuses = [
                { status: 'Approved', color: 'green', message: 'Your license has been approved and is available in your dashboard.' },
                { status: 'In Progress', color: 'orange', message: 'Your application is currently being reviewed by the concerned department.' },
                { status: 'Rejected', color: 'red', message: 'Your application was rejected. Please check your email for details and next steps.' },
                { status: 'Pending Documents', color: 'orange', message: 'Your application requires additional documents. Please check your dashboard for details.' }
            ];
            const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

            // Display the simulated result
            resultDiv.innerHTML = `
                <h2>Status Result</h2>
                <p><strong>Application ID:</strong> ${applicationId}</p>
                <p><strong>Status:</strong> <span style="color: ${randomStatus.color}; font-weight: bold;">${randomStatus.status}</span></p>
                <p><strong>Details:</strong> ${randomStatus.message}</p>
            `;
        }, 1500); // Simulate network delay
    });
});
