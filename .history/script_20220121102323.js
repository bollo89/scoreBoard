let number = document.querySelector('.number');
let n = 0;
number.innerHTML = n;

let btn = document.querySelector('.btn1');

function score(n) {
    number.innerHTML = n+1;
    console.log(n);
}

btn.addEventListener('click',score(n),false);