const keys = [...document.querySelectorAll('.btn')];
const listKeyCodes = keys.map(digits => digits.dataset.key);
const screen = document.querySelector('.interface');


document.addEventListener('keydown', (e) => {
    const value = e.keyCode.toString()
})

document.addEventListener('click', (e) => {
    const value = e.target.dataset.key;
    calculate(value)
})

const calculer = (value) => {

}