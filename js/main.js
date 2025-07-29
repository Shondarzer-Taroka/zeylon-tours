



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











  document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll(".scroll-fade-up");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, {
      threshold: 0.1
    });

    scrollElements.forEach(el => observer.observe(el));
  });





  const boxes = document.querySelectorAll('.box');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;

          if (el.classList.contains('from-up')) {
            el.classList.add('fade-up');
          } else if (el.classList.contains('from-left')) {
            el.classList.add('fade-left');
          } else if (el.classList.contains('from-right')) {
            el.classList.add('fade-right');
          } else if (el.classList.contains('from-down')) {
            el.classList.add('fade-down');
          }

          el.classList.remove('hidden');
        }
      });
    }, {
      threshold: 0.2,
    });

    boxes.forEach(box => observer.observe(box));



