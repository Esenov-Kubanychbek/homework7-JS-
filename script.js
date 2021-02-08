let h1 = document.querySelector('h1')
let btn1 = document.querySelector('#example1')
let btn2 = document.querySelector('#example2')
let btn3 = document.querySelector('#example3')
let btn4 = document.querySelector('#example4')
let btn5 = document.querySelector('#example5')

btn4.addEventListener('click', function(){
    let number = parseInt(h1.innerText);
    number++;
    h1.innerText = number;
})
btn5.addEventListener('click', function(){
    let number = parseInt(h1.innerText);
    number--;
    h1.innerText = number;
})