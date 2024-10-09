// Function to load the navbar from navbar.html and insert it into the page
function loadNavbar() {
    fetch('navbar.html') // Load the navbar.html file
        .then(response => response.text())
        .then(html => {
            // Insert the loaded HTML into the placeholder
            document.getElementById('navbar-placeholder').innerHTML = html;

            // Manage mobile menu toggle
            const menuToggle = document.getElementById('menu-toggle');
            const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
            const closeOverlay = document.getElementById('close-overlay');

            menuToggle.addEventListener('click', function () {
                mobileMenuOverlay.style.display = 'block';
            });

            closeOverlay.addEventListener('click', function () {
                mobileMenuOverlay.style.display = 'none';
            });

            // Check Firebase Auth state to manage Client Login visibility
            firebase.auth().onAuthStateChanged((user) => {
                const clientLoginItem = document.getElementById('client-login');
                const mobileClientLoginItem = document.getElementById('mobile-client-login');
                if (user) {
                    // User is logged in, hide Client Login
                    if (clientLoginItem) clientLoginItem.style.display = 'none';
                    if (mobileClientLoginItem) mobileClientLoginItem.style.display = 'none';
                } else {
                    // User is not logged in, show Client Login
                    if (clientLoginItem) clientLoginItem.style.display = 'block';
                    if (mobileClientLoginItem) mobileClientLoginItem.style.display = 'block';
                }
            });
        })
        .catch(error => {
            console.error('Error loading the navigation bar:', error);
        });
}

// Call the function to load the navbar
loadNavbar();
