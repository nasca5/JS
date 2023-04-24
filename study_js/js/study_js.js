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
  $('.hello').toggleClass('hide');
})

$('.btn-danger').on('click', function() {
  $('.nav').toggleClass('hide');
  $('.main-bg').toggleClass('hide');
  $('.black-bg').toggleClass('show');
  $('.hello').toggleClass('hide');
})

const email = document.getElementById('exampleInputEmail1');
const passwd = document.getElementById('exampleInputPassword1');

$('form').on('submit', function(e) {
  if (!email.value) {
    e.preventDefault();
    alert('please write id');
  }
  else if (!(/\S+@\S+\.\S+/.test(email.value))) {
    e.preventDefault();
    alert('please write emailform');
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

const input = $('.quiz-input');
const button = $('.quiz-button');

button.on('click', () => {
  if(input.val() == '1335') {
    alert('축하합니다.');
  }
})

