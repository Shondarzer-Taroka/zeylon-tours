const questions = document.querySelectorAll('.faq-question');

questions.forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    item.classList.toggle('active');
  });
});
