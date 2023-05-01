// 이벤트 버블링 : 이벤트가 상위 요소들로 퍼지는 현상
// 유용한 이벤트 관련 함수들 addEventListner() 안의 함수에 인수로 e를 주면 다양한 이벤트 관련 함수를 쓸 수 있다.
//  1. e.target() : 실제로 내가 누른 곳을 알려준다.
//  2. e.currentTarget() : 이벤트리스너가 달린 곳을 알려준다. -> this도 같은 의미를 가진다.
//  3. e.preventDefault() : 이벤트의 기본 동작을 막아줌. -> 만약 클릭으로 서브밋 동작이 달렸다면 해당 동작을 막아주는 식. 강제로 실행되는 것들은 멈출 수 없다.
//  4. e.stopPropagation() : 내 상위 요소로의 이벤트 버블링을 막아준다.

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

$('.login').on('click', (e) => {
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
