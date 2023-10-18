let bg_color1 = document.querySelector('.panel1 div:first-of-type');
let bg_color2 = document.querySelector('.panel1 div:nth-of-type(2)');
let bg_color3 = document.querySelector('.panel1 div:nth-of-type(3)');
let bg_color4 = document.querySelector('.panel1 div:nth-of-type(4)');
let bg_color5 = document.querySelector('.panel1 div:nth-of-type(5)');

let body = document.querySelector('body');
let cube = document.querySelectorAll('.box');
bg_color1.addEventListener('click',()=>{
    body.style.background = bg_color1.className;
})

bg_color2.addEventListener('click',()=>{
    body.style.background = bg_color2.className;
})
bg_color3.addEventListener('click',()=>{
    body.style.background = bg_color3.className;
})
bg_color4.addEventListener('click',()=>{
    body.style.background = bg_color4.className;
})
bg_color5.addEventListener('click',()=>{
    body.style.background = bg_color5.className;
})
