let number = document.querySelector('.number');
let n = 0;
number.innerHTML = n;

let btn = document.querySelector('.btn1');

function score1() {
    n+=1;
    number.innerHTML = n;
    console.log(n);
}

btn.addEventListener('click',score1,true);