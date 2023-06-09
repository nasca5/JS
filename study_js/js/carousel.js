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

const max = 3;

// prev.addEventListener('click', () => {
//   if(absPosX == 1) {
//     box.style.transform = 'translateX(-200vw)';
//     absPosX = 3;
//   }
//   else if(absPosX == 2) {
//     box.style.transform = 'translateX(-0vw)';
//     absPosX = 1; 
//   }
//   else if(absPosX == 3) {
//     box.style.transform = 'translateX(-100vw)';
//     absPosX = 2;
//   }
// });

prev.addEventListener('click', () => {
  if(absPosX !== 1) {
    box.style.transform = 'translateX(-' + (absPosX-2)*100 + 'vw)';
    absPosX -= 1;
  }
  else {
    absPosX = max;
    box.style.transform = 'translateX(-' + (absPosX-1)*100 + 'vw)';
  }
});

next.addEventListener('click', () => {
  if(absPosX !== max) {
    box.style.transform = 'translateX(-' + absPosX*100 + 'vw)';
    absPosX += 1;
  }
  else {
    absPosX = 1;
    box.style.transform = 'translateX(-' + 0 + 'vw)';
  }
});