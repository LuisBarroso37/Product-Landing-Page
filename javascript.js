let a = document.querySelectorAll('a');

a.forEach(elem => {
  elem.addEventListener('click', () => {
    let current = document.querySelectorAll('.active');
    current[0].classList.remove('active');
    elem.classList.add('active');
    });
});