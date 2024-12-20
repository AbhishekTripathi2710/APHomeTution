document.addEventListener("DOMContentLoaded", function() {
    // Check if we're on the Home page
    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
        // Type effect logic only for Home page
        const fadeText = document.querySelector(".fade-text");
        const text = fadeText.textContent.trim();
        fadeText.innerHTML = "B"; // Clear the content

        let i = 0; // This will control the animation progress
        let forward = true;

        function typeEffect() {
            fadeText.innerHTML = ""; // Clear the content before re-typing
            if (forward) {
                // Type the text forward
                for (let j = 0; j <= i; j++) { // Start from 0
                    const span = document.createElement("span");
                    span.textContent = text[j];
                    fadeText.appendChild(span);
                }
                if (i < text.length - 1) {
                    i++;
                } else {
                    forward = false;
                }
            } else {
                // Backward typing effect
                for (let j = 0; j < i; j++) { // Start from 0
                    const span = document.createElement("span");
                    span.textContent = text[j];
                    fadeText.appendChild(span);
                }

                if (i > 0) {
                    i--;
                } else {
                    forward = true; 
                }
            }
        }

        setInterval(typeEffect, 100);
    }

    // Event listener for "Call Now" button
    document.getElementById('callNowBtn').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'tel:+918887187998'; // Replace with your phone number
    });

    // Event listener for "Chat on WhatsApp" button
    document.getElementById('whatsappBtn').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'https://wa.me/+918887187998'; // Replace with your WhatsApp number
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

    // Event listener for the hamburger menu button (Only add it once)
    const menuButton = document.querySelector('.menu-btn');
    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }

    document.addEventListener('click', function(event) {
        const menu = document.getElementById('nav-links');
        const menuButton = document.querySelector('.menu-btn');
        
        // If the clicked element is neither the menu nor the menu button, close the menu
        if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
            menu.classList.remove('show');
            document.body.classList.remove('menu-active');
        }
    });

});

