var cnt = 0;

$('.nav-toggler').on('click', () => {
  cnt++;
  if((cnt % 2) == 1) {
    $('.nav-dark').toggleClass('whit-bg')
    $('body').toggleClass('dark-bg')
    $('.nav-dark').html('Light 🔄');
  }
  else {
    $('.nav-dark').toggleClass('whit-bg')
    $('body').toggleClass('dark-bg')
    $('.nav-dark').html('Dark 🔄');
  }
});

document.getElementById('exampleInputEmail1').addEventListener('change', () => {
  console.log('안녕');
});
$('.login').on('click', function() {
  $('.nav').toggleClass('hide');
  $('.main-bg').toggleClass('hide');
  $('.black-bg').toggleClass('show');
})

$('.btn-danger').on('click', function() {
  $('.nav').toggleClass('hide');
  $('.main-bg').toggleClass('hide');
  $('.black-bg').toggleClass('show');
})

const email = document.getElementById('exampleInputEmail1');
const passwd = document.getElementById('exampleInputPassword1');

$('form').on('submit', function(e) {
  if (!email.value) {
    e.preventDefault();
    alert('please write id');
  }
  else if (!passwd.value) {
    e.preventDefault();
    alert('please write passwd');
  }
  else if (passwd.value.length < 6) {
    e.preventDefault();
    alert('passwd should more than 6 letters.');
  }
});

// let age = 26;
// const born = 'namyangju';

// var name = 'kang';
// var id = 0;

// function showName() {
//   var name = 'kim';
//   var id = 1;
//   console.log(name);
// }

// showName();
// console.log(id);

// let deposit = prompt('예금하실 금액을 적어주세요');
// let depositFuture = deposit;

// if (deposit >= 50000) {
//   depositFuture *= 1.4;
// }
// else {
//   depositFuture *= 1.3;
// }

// console.log(depositFuture);

// let first = parseInt(prompt('처음에 얼마나 마실겨?'));

// console.log(`당신이 총 마실 수 있는 ml는 ${first + first * (2/3) + (first * (2/3)) * (2/3)}ml입니다.`);

const input = $('.quiz-input');
const button = $('.quiz-button');

button.on('click', () => {
  if(input.val() == '1335') {
    alert('축하합니다.');
  }
})