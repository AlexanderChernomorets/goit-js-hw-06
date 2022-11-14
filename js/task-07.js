const inputValueEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

console.log(inputValueEl);

inputValueEl.addEventListener('input', (event) => {
    // console.log(event);
    const sizeText = event.currentTarget.value;
    // console.log(sizeText);
    spanEl.style.fontSize = sizeText + 'px';
})