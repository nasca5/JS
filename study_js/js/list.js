const products = [
  { id : 0, price : 70000, title : 'Blossom Dress' },
  { id : 1, price : 50000, title : 'Springfield Shirt' },
  { id : 2, price : 60000, title : 'Black Monastery' }
];

// const title = document.querySelectorAll('.card-body h5');
// const price = document.querySelectorAll('.card-body p');

// for(let i = 0; i < 3; i++) {
//   title[i].innerText = products[i].title;
//   price[i].innerText ='가격 : ' +  products[i].price;
// }

// jquery를 이용해서 Ajax로 GET 요청하는 법

// 아래 url에 있는 문자열 가져와서 출력하기
// $.get('https://codingapple1.github.io/hello.txt').done(data => console.log(data)).fail(() => console.log('실패함'));

// 아래 url에 있는 jsom 파일에서 객체 가지고 와서 해당 데이터를 밸류값 출력하기
// $.get('https://codingapple1.github.io/price.json').done(data => console.log(data.price)).fail(() => console.log('실패함'));

// fetch('https://codingapple1.github.io/price.json')
// .then(res => res.json())
// .then(data => {
//   console.log(data.price);
// })
// .catch(error => {
//   console.log(error);
// });


products.forEach(data => {
  // createElement로 요소 생성하고 직접 이어붙이는 방식 / 요소마다 변수에 할당하여 연결해주어야 하므로 코드가 꽤 길다.
  // const cardBox = document.createElement('div');
  // const img = document.createElement('img');
  // const h5 = document.createElement('h5');
  // const p = document.createElement('p');

  // img.src = 'https://via.placeholder.com/600';
  // h5.innerText = data.title;
  // p.innerText = `가격 : ${data.price}`;

  // cardBox.classList.add('col-sm-4');
  // img.classList.add('w-100');

  // document.querySelector('.row').appendChild(cardBox);
  // document.querySelector('.row').appendChild(cardBox);

  // cardBox.appendChild(img);
  // cardBox.appendChild(h5);
  // cardBox.appendChild(p);

  // temp 변수에 html에 들어갈 내용 할당한 다음 insertAdjacentHTML로 부모 요소 밑에 추가하는 방법 / 직접 내용을 작성해서 연결해주면
  // 되므로 코드가 꽤 간결해진다.
  const temp = `
  <div class = "col-sm-4">
    <img src="https://via.placeholder.com/600" class ="w-100">
    <h5>${data.title}</h5>
    <p>${data.price}</p>
  </div>`;
  document.querySelector('.row').insertAdjacentHTML('beforeend', temp);
  // jquery 문법을 사용하면 좀 더 간결하게 사용할 수 잇다.
  // $('.row').append(temp);
});

let count = 0;

$('.container>button').on('click', () => {
  if(count === 2) {
    $('.container>button').addClass('hidden');
    return 0;
  }
  $.get(`https://codingapple1.github.io/js/more${count + 1}.json`).done(data => {
    data.forEach(data => {
      const temp = `
      <div class = "col-sm-4">
        <img src="https://via.placeholder.com/600" class ="w-100">
        <h5>${data.title}</h5>
        <p>${data.price}</p>
      </div>`;
      document.querySelector('.row').insertAdjacentHTML('beforeend', temp);
    }).fail(error => {
      console.log(error);
    });
  });
  count++;
});