function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 
const changeBtn = document.querySelector('.change-color');
const textSpan = document.querySelector('.color')
const bgcBody = document.querySelector('body')

changeBtn.addEventListener('click', onClickChangeBtn);

function onClickChangeBtn() {
  const bgc = textSpan.textContent = getRandomHexColor();
  bgcBody.style.backgroundColor = bgc;
}