// // Load reusable navbar
// document.addEventListener('DOMContentLoaded', function () {
//     // Create navbar HTML
//     const navbarHTML = `
//         <nav class="navbar">
//             <div class="navbar-contact">
//                 <a href="tel:+94771234567">
//                     <i class="fas fa-phone"></i> +94 77 123 4567
//                 </a>
//                 <a href="mailto:info@zeylonatours.lk">
//                     <i class="fas fa-envelope"></i> info@zeylonatours.lk
//                 </a>
//             </div>
           
//            <p>Authentic Sri Lankan Adventures</p>
//         </nav>
//     `;

//     // Insert navbar
//     document.getElementById('navbar').innerHTML = navbarHTML;

//     // Highlight active link
//     const currentPage = location.pathname.split('/').pop() || 'index.html';
//     const navLinks = document.querySelectorAll('.nav-links a');

//     navLinks.forEach(link => {
//         const linkPage = link.getAttribute('href').split('/').pop();
//         if (currentPage === linkPage) {
//             link.classList.add('active');
//         }
//     });
// });





















// main.js - Complete Fixed Implementation
document.addEventListener('DOMContentLoaded', function() {
    // Function to create and inject navbar
    function initializeNavbar() {
        const navbarHTML = `
            <!-- Top Contact Bar -->
            <div class="top-contact-bar">
                <div class="container">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="contact-info">
                            <a href="tel:+94771234567" class="contact-link">
                                <i class="fas fa-phone-alt me-2"></i> +94 77 123 4567
                            </a>
                            <a href="mailto:info@zeylonatours.lk" class="contact-link">
                                <i class="fas fa-envelope me-2"></i> info@zeylonatours.lk
                            </a>
                        </div>
                        <div class="slogan">
                            Authentic Sri Lankan Adventures
                        </div>
                    </div>
                </div>
            </div>

            <!-- Main Navigation -->
            <nav class="navbar navbar-expand-lg  sticky-top">
                <div class="container">
                    <a class="navbar-brand fw-bold" href="index.html">ZeylonaTours</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="about.html">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="tours.html">Destinations</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;

        const navbarContainer = document.getElementById('navbar-container');
        if (navbarContainer) {
            navbarContainer.innerHTML = navbarHTML;
            initializeBootstrapComponents();
            highlightActiveLink();
            setupScrollBehavior();
        }
    }

    function initializeBootstrapComponents() {
        // Initialize Bootstrap dropdowns and collapses
        if (typeof bootstrap !== 'undefined') {
            // Initialize all dropdowns
            const dropdowns = document.querySelectorAll('.dropdown-toggle');
            dropdowns.forEach(dropdown => {
                new bootstrap.Dropdown(dropdown);
            });

            // Initialize navbar collapse
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse) {
                new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
            }
        }
    }

    function highlightActiveLink() {
        const currentPage = location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();
            if (currentPage === linkPage) {
                link.classList.add('active');
            }
        });
    }

    function setupScrollBehavior() {
        let lastScroll = 0;
        const topBar = document.querySelector('.top-contact-bar');
        
        if (topBar) {
            window.addEventListener('scroll', function() {
                const currentScroll = window.pageYOffset;
                
                if (currentScroll <= 0) {
                    topBar.classList.remove('scrolled-up');
                    return;
                }
                
                if (currentScroll > lastScroll && !topBar.classList.contains('scrolled-down')) {
                    // Scroll down
                    topBar.classList.remove('scrolled-up');
                    topBar.classList.add('scrolled-down');
                } else if (currentScroll < lastScroll && topBar.classList.contains('scrolled-down')) {
                    // Scroll up
                    topBar.classList.remove('scrolled-down');
                    topBar.classList.add('scrolled-up');
                }
                
                lastScroll = currentScroll;
            });
        }
    }

    // Initialize everything
    initializeNavbar();

    // Handle page transitions
    document.addEventListener('click', function(e) {
        if (e.target.matches('a[href^="http"]') || e.target.matches('a[href^="/"]')) {
            e.preventDefault();
            const href = e.target.getAttribute('href');
            window.location.href = href;
        }
    });
});