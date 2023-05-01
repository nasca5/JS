//  버튼 누르면
//  - 버튼에 붙은 orange 클래스명 제거
//  - 버튼에 붙은 orange  클래스명 추가
//  - 모든 div에 붙은 show 클래스명 제거
//  - div에 붙은 show 클래스명 추가

const bttn = $('.tab-button');
const content = $('.tab-content');
const count = bttn.length;

// for (let i = 0; i < count; i++) {
//   bttn.eq(i).on('click', () => {
//     tab(i);
//   });
// }

// document.querySelectorAll('.tab-button')[0]



$('.list').click(e => {
  // if(e.target == bttn.eq(0)[0])
  //   tab(0);  
  // if(e.target == bttn.eq(1)[0])
  //   tab(1);  
  // if(e.target == bttn.eq(2)[0])
  //   tab(2);  
  
  tab(e.target.dataset.id);
})

function tab(i) {
  bttn.removeClass('orange');
  bttn.eq(i).addClass('orange');
  content.removeClass('show');
  content.eq(i).addClass('show');
}