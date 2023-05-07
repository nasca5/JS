const products = [
  { id : 0, price : 70000, title : 'Blossom Dress' },
  { id : 1, price : 50000, title : 'Springfield Shirt' },
  { id : 2, price : 60000, title : 'Black Monastery' }
];

const title = document.querySelectorAll('.card-body h5');
const price = document.querySelectorAll('.card-body p');

for(let i = 0; i < 3; i++) {
  title[i].innerText = products[i].title;
  price[i].innerText ='가격 : ' +  products[i].price;
}