const box = document.querySelector('.container');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let absPosX;

btn1.addEventListener('click', () => {
  box.style.transform = 'translateX(0vw)';
});

btn2.addEventListener('click', () => {
  box.style.transform = 'translateX(-100vw)';
});

btn3.addEventListener('click', () => {
  box.style.transform = 'translateX(-200vw)';
});

prev.addEventListener('click', () => {
  if(box.getBoundingClientRect().left == 0)
    box.style.transform = 'translateX(-200vw)';
  else if(box.getBoundingClientRect().left == -695) 
    box.style.transform = 'translateX(0vw)';
  else if(box.getBoundingClientRect().left == -1390) 
    box.style.transform = 'translateX(-100vw)';
});

next.addEventListener('click', () => {
  if(box.getBoundingClientRect().left == 0) 
    box.style.transform = 'translateX(-100vw)';
  else if(box.getBoundingClientRect( ).left == -695) 
    box.style.transform = 'translateX(-200vw)';
  else if(box.getBoundingClientRect( ).left == -1390) 
    box.style.transform = 'translateX(0vw)';
});