document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('callNowBtn').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'tel:+918887187998';  // Replace with your phone number
    });
   
    // Function to toggle the mobile menu
    function toggleMenu() {
        const menu = document.getElementById('nav-links');
        menu.classList.toggle('show'); // Toggle the visibility of the menu

        // Toggle the body class that shifts content below the menu
        document.body.classList.toggle('menu-active');
    }

    // Event listener for the hamburger menu button
    const menuButton = document.querySelector('.menu-btn');
    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }


    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const menu = document.getElementById('nav-links');
        const menuButton = document.querySelector('.menu-btn');
        if (menuButton) {
            menuButton.addEventListener('click', function() {
                menu.classList.toggle('show'); // Toggle the menu visibility
                document.body.classList.toggle('menu-active'); // Optionally shift the body content
            });
        }
    });
});