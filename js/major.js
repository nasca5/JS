const selectMenu = document.querySelector("#major");  // 선택 목록을 가져와 selectMenu로 저장
const number = document.querySelector("#number");  // 숫자를 가져와 number로 저장
const name  = document.querySelector("#name");  // 이름을 가져와 name으로 저장
const button = document.querySelector("button");  // 버튼을 가져와 button으로 저장

function displaySelect() {  
  let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;  	
  alert(`${number.value} ${id.value}님, [${selectedText}]를 선택했습니다.`);
}		

button.addEventListener("click", displaySelect);