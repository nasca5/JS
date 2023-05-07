//  버튼 누르면
//  - 버튼에 붙은 orange 클래스명 제거
//  - 버튼에 붙은 orange  클래스명 추가
//  - 모든 div에 붙은 show 클래스명 제거
//  - div에 붙은 show 클래스명 추가

const bttn = $('.tab-button');
const content = $('.tab-content');

// for (let i = 0; i < count; i++) {
//   bttn.eq(i).on('click', () => {
//     tab(i);
//   });
// }

// document.querySelectorAll('.tab-button')[0]


function tab(i) {
  bttn.removeClass('orange');
  bttn.eq(i).addClass('orange');
  content.removeClass('show');
  content.eq(i).addClass('show');
}

$('.list').click(e => {
  // if(e.target == bttn.eq(0)[0])
  //   tab(0);  
  // if(e.target == bttn.eq(1)[0])
  //   tab(1);  
  // if(e.target == bttn.eq(2)[0])
  //   tab(2);  
  
  tab(e.target.dataset.id);
})

// const car = ['소나타', 50000, 'White'];
const car2 = {name : '소나타', price : 50000};


const sentence = document.querySelector('.card p');
// 문자열 연산자 이용
const a = 'name';
sentence.innerText = /* car2.name */car2[a]  + '/' + car2.price; 
// 백팃(`) 이용
// `${car2.name} / ${car2.price}`

const car3 = {name : '소나타', price : [50000, 3000, 40000]};

sentence.innerText = car3.name + ' / ' + car3.price[2];

const select = document.querySelectorAll('.form-select');

select[0].addEventListener('input', () => {
  if(select[0].value === '셔츠') {
    select[1].classList.remove('hidden');
  }

  else if(select[0].value === '모자') {
    select[1].classList.add('hidden');
  }
});