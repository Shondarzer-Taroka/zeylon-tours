



document.addEventListener('DOMContentLoaded', function () {

  const currentUrl = window.location.pathname.split('/').pop() || 'index.html';


  const navLinks = document.querySelectorAll('.zt-nav-link');


  navLinks.forEach(link => {

    const linkUrl = link.getAttribute('href').split('/').pop();


    link.classList.remove('active');

    // Add active class to current page link
    if (currentUrl === linkUrl) {
      link.classList.add('active');
    }
  });
});

