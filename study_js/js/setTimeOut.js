let count = 5;

setInterval(() => {
  --count;
  if(count < 0) {
    count = 0;
    $('.container').css("display", "none");
  }
  else {
      $('span').html(count);
  }
}, 1000);