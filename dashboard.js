// Toggle Light and Dark Theme
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
});

// Responsive Sidebar Toggle (optional for mobile view)
const sidebar = document.querySelector('.sidebar');
const toggleSidebarBtn = document.createElement('button');
toggleSidebarBtn.innerText = 'Toggle Sidebar';
toggleSidebarBtn.classList.add('theme-toggle');
document.body.insertBefore(toggleSidebarBtn, document.body.firstChild);

toggleSidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

function logout() {
    // Clear session storage or local storage if used
    sessionStorage.clear(); // Clears all session storage
    localStorage.clear();   // Clears all local storage (if needed)

    // Optionally, you can clear cookies (if used)
    document.cookie.split(";").forEach(function(c) { 
        document.cookie = c.replace(/^ +/, "")
            .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });

    // Redirect to the login page
    window.location.href = "AdminLogin.html"; // Change this URL to your actual login page
}
