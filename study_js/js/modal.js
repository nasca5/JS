// 이벤트 버블링 : 이벤트가 상위 요소들로 퍼지는 현상

let cnt = 0;

$('.nav-toggler').on('click', () => {
  cnt++;
  if (cnt % 2 === 1) {
    $('.nav-dark').toggleClass('whit-bg');
    $('body').toggleClass('dark-bg');
    $('.nav-dark').html('Light 🔄');
  } else {
    $('.nav-dark').toggleClass('whit-bg');
    $('body').toggleClass('dark-bg');
    $('.nav-dark').html('Dark 🔄');
  }
});

$('exampleInputEmail1').on('change', () => {
  console.log('안녕');
});

$('.login').on('click', () => {
  $('.nav').toggleClass('hide');
  $('.main-bg').toggleClass('hide');
  $('.black-bg').toggleClass('show');
  $('.hello').toggleClass('hide');
});

$('.btn-danger').on('click', () => {
  $('.nav').toggleClass('hide');
  $('.main-bg').toggleClass('hide');
  $('.black-bg').toggleClass('show');
  $('.hello').toggleClass('hide');
});

const email = document.getElementById('exampleInputEmail1');
const passwd = document.getElementById('exampleInputPassword1');

$('form').on('submit', e => {
  if (!email.value) {
    e.preventDefault();
    alert('please write id');
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    e.preventDefault();
    alert('please write emailform');
  } else if (!passwd.value) {
    e.preventDefault();
    alert('please write passwd');
  } else if (passwd.value.length < 6) {
    e.preventDefault();
    alert('passwd should more than 6 letters.');
  }
});

const input = $('.quiz-input');
const button = $('.quiz-button');

button.on('click', () => {
  if (input.val() === '1335') {
    alert('축하합니다.');
  }
});
