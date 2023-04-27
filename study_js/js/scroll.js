const size = document.querySelector('.navbar-brand');
const lorem = document.querySelector('.lorem');
const html = document.querySelector('html');
const black = document.querySelector('.progress-black');

let percent;

window.addEventListener('scroll', () => {
  if (window.scrollY > 100)
    size.style.fontSize = '50px';
  else
    size.style.fontSize = '30px';
});

lorem.addEventListener('scroll', () => {
  if((lorem.scrollTop + lorem.clientHeight) >= (lorem.scrollHeight)) {
    alert('약관은 우리 사천왕 중 최약체에 불과하지...!');
  }
});

window.addEventListener('scroll', () => {
  percent = (html.scrollTop / (html.scrollHeight - html.clientHeight)) * 100;
  black.style.width = percent +'%';
});