const box = document.querySelector('.container');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let absPosX = 1;

btn1.addEventListener('click', () => {
  box.style.transform = 'translateX(0vw)';
  absPosX = 1;
});

btn2.addEventListener('click', () => {
  box.style.transform = 'translateX(-100vw)';
  absPosX = 2;
});

btn3.addEventListener('click', () => {
  box.style.transform = 'translateX(-200vw)';
  absPosX = 3;
});

prev.addEventListener('click', () => {
  if(absPosX == 1) {
    box.style.transform = 'translateX(-200vw)';
    absPosX = 3;
  }
  else if(absPosX == 2) {
    box.style.transform = 'translateX(-0vw)';
    absPosX = 1; 
  }
  else if(absPosX == 3) {
    box.style.transform = 'translateX(-100vw)';
    absPosX = 2;
  }
});

next.addEventListener('click', () => {
  if(absPosX == 1) {
    box.style.transform = 'translateX(-100vw)';
    absPosX = 2;
  }
  else if(absPosX == 2) {
    box.style.transform = 'translateX(-200vw)';
    absPosX = 3;
  }
  else if(absPosX == 3) {
    box.style.transform = 'translateX(-0vw)';
    absPosX = 1;
  }
});