const counter = {
    value: 0,
    increment () {
        this.value += 1;
    }, 
    decrement (){
        this.value -= 1;
    }
}

const counters = document.querySelectorAll('[data-action]')

counters[0].classList.add('js-decrement');
counters[1].classList.add('js-increment');

const valueEl = document.querySelector('#value');
valueEl.classList.add('js-value');

const decrementBtn = document.querySelector('.js-decrement');
const incrementBtn = document.querySelector('.js-increment');

decrementBtn.addEventListener('click', function () {
    counter.decrement();
    valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function () {
    counter.increment();
    valueEl.textContent = counter.value;
})