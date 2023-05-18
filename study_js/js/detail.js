//  버튼 누르면
//  - 버튼에 붙은 orange 클래스명 제거
//  - 버튼에 붙은 orange  클래스명 추가
//  - 모든 div에 붙은 show 클래스명 제거
//  - div에 붙은 show 클래스명 추가

const bttn = $('.tab-button');
const content = $('.tab-content');
const lst = $('.list');
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

lst.on('click', e => {
  // if(e.target == bttn.eq(0)[0])
  //   tab(0);  
  // if(e.target == bttn.eq(1)[0])
  //   tab(1);  
  // if(e.target == bttn.eq(2)[0])
  //   tab(2);  
  
  tab(e.target.dataset.id);
});

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

const select1 = $('.form-select').eq(0);
const select2 = $('.form-select').eq(1);
const pants = [28, 30, 32];
const shirts = [95, 100, 105, 110];

select1.on('input', function() {
  const value = this.value;
  if(value === '셔츠' || value === '바지') {
    select2.removeClass('hidden');
    select2.html('');
    if(value === '셔츠') {
      shirts.forEach(item => select2.append(`<option>${item}</option>`));
    }
    else {
      // 1. 배열의 길이를 이용한 방법
      // for(let i = 0; i < pants.length; i++) {
      //   const input = `<option>${pants[i]}</option>`;
      //   select2.append(input);
      // }

      // 2. forEach() 문을 이용한 방법
      // pants.forEach(pant => select2.append(`<option>${pant}</option>`));

      // 3. for (.. of ..) 문을 이용한 방법
      for(let item of pants) {
        select2.append('<option>' + item + '</option>');
      }
        
    }
  }

  else {
    select2.addClass('hidden');
  }
})

// js 문법으로 작성
// select[0].addEventListener('input', () => {
//   if(select[0].value === '셔츠' || select[0].value === '바지') {
//     select[1].classList.remove('hidden');
//     if(select[0].value === '셔츠') {
//       select[1].innerHTML = '<option>95</option> <option>100</option> <option>105</option>';
//     }
//     else {
//       select[1].innerHTML = '<option>28</option> <option>30</option> <option>32</option>';
//     }
//   }

//   else if(select[0].value === '모자') {
//     select[1].classList.add('hidden');
//   }
// });

// jquery 문법으로 작성
// select.eq(0).on('input', function() {
//   const value = this.value;
//   if(value === '셔츠' || value === '바지') {
//     select.eq(1).removeClass('hidden');
//     select.eq(1).html('');
//     if(value === '셔츠') {
//       const shirts = `<option>95</option>
//                     <option>100</option>
//                     <option>105</option>`;

//       select.eq(1).append(shirts);
//     }
//     else {
//       const pants  = `<option>28</option>
//                     <option>30</option>
//                     <option>32</option>`;
//       select.eq(1).append(pants);
//     }
//   }

//   else {
//     select.eq(1).addClass('hidden');
//   }
// })

// 서버에서 가져온 데이터를 참고해서 html에 요소를 만드는 방법 for문 활용


// js로 html에 요소 추가하는 방법

// 1번 ceateElement() 메소드를 통해 태그를 생성하고 innerHTML이나 innerText로 콘텐츠를 채워서 요소를 완성한 다음
// appendChild() 메소드를 통해 원하는 부모 요소의 자식 요소로 추가하는 방법
// const test = document.createElement('p');
// test.innerHTML = 'hello';
// document.querySelector("#test")
// document.querySelector("#test").appendChild(test);

// 2번 innerAdjecentHTML() 메소드를 통해 직접 요소의 위치를 지정하여 추가하는 방법
// 첫 번째 매개변수로 추가하고 싶은 곳의 구체적인 위치를 지정하고, 두 번째 매개변수로 추가할 요소를 지정한다.
// const template = '<p>hello</p>';
// document.querySelector("#test").innerAdjacentHTML('beforeend', template);

// 3번 jquery를 이용하여 간결하게 코드를 짤 수도 있다.
// 이때 html()은 innerHTML과 비슷하다. 안에 있던 내용을 없애고 지정한 요소를 추가한다.
// $('#test').html(template);

// 실습 문제 함수에 인자로 전달한 이름이 배열 안에 있는지 확인하는 함수
// let check = ['kang', 'kim', 'park', 'lee'];
// function findname (name) {
//   check.forEach((item, i) => {
//     if(item === name) {
//       console.log("is here!");
//     }
//   });
// }

// 구구단을 결과만 출력하는 함수
// 1. 이중 for문을 이용하여 result 배열에 모든 계산 결과를 저장하고, forEach() 메소드를 이용해서 출력하는 방법
// let result = [];

// for(let i = 1; i < 10; i++) {
//   for(let j = 1; j < 10; j++) {
//     result.push(i * j);
//   }
// }

// result.forEach(item => console.log(item));

// 2. result2 배열에 미리 1~9까지 저장해놓고, for (.. of ..)문을 이중으로 해서 결과를 출력하는 방법
// let result2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for(let item of result2) {
//   for(let data of result2) {
//     console.log(item * data);
//   }
// }

// 3. 기존 모의고사 성적이 입력되어 있는 배열의 원소들의 평균과 11월 모의고사 성적의 평균 사이에 갭을 출력해주는 함수 만드는 방법
// const score = [40, 40, 60, 80, 60];
// const score2 = 55;

// function check(score, score2) {
//   let avg = 0;
  
//   score.forEach(item => {
//     avg += item;
//   });
//   score.length;
//   const total = avg / score.length;
//   if(score2 > total) {
//     console.log(`${score2 - total}+`);
//   }
//   else if (score2 === total) {
//     console.log('same!');
//   }
//   else {
//     console.log(`${total - score2}--;`)
//   }
// }

