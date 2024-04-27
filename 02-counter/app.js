// init count
let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');


btns.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    const target = e.currentTarget;
    if (target.classList.contains('decrease')) {
      count--;
    } else if (target.classList.contains('increase')) {
      count++;
    } else {
      count = 0;
    }

    // Change the counter color
    if (count > 0) value.style.color = 'green';
    else if (count < 0) value.style.color = 'red';
    else value.style.color = '#222';

    value.textContent = count;
  });
});