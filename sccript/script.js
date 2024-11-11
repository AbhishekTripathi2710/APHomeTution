document.addEventListener("DOMContentLoaded", function() {
    const fadeText = document.querySelector(".fade-text");
    const text = fadeText.textContent.trim();
    fadeText.innerHTML = ""; // Clear the content

    let i = 0; // This will control the animation progress
    let forward = true;

    function typeEffect() {
        fadeText.innerHTML = "S"; // Reset the content
        if (forward) {
            // Type the text forward
            for (let j = 1; j <= i; j++) {
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
            for (let j = 1; j < i; j++) {
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

    // Event listener for "Call Now" button
    document.getElementById('callNowBtn').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'tel:+918887187998'; // Replace with your phone number
    });

    // Event listener for "Chat on WhatsApp" button
    document.getElementById('whatsappBtn').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'https://wa.me/+917307419353'; // Replace with your WhatsApp number
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
});
