document.addEventListener("DOMContentLoaded", function() {
    // Phone number click functionality
    document.getElementById('callNowBtn').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'tel:+918887187998';  // Replace with your phone number
    });

    // Function to toggle the mobile menu
    function toggleMenu(event) {
        const menu = document.getElementById('nav-links');
        menu.classList.toggle('show'); // Toggle the visibility of the menu

        // Toggle the body class that shifts content below the menu
        document.body.classList.toggle('menu-active');
        
        // Prevent the event from propagating to the document click listener
        event.stopPropagation();
    }

    // Event listener for the hamburger menu button
    const menuButton = document.querySelector('.menu-btn');
    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }

    // Close menu when clicking outside of the menu and the menu button
    document.addEventListener('click', function(event) {
        const menu = document.getElementById('nav-links');
        const menuButton = document.querySelector('.menu-btn');
        
        // If the clicked element is neither the menu nor the menu button, close the menu
        if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
            menu.classList.remove('show');
            document.body.classList.remove('menu-active');
        }
    });

    AOS.init({
        duration: 2000, // Customize the animation duration
        once: true,      // Optionally trigger the animation only once
    });
});
