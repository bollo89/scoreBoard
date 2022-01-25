let home = document.querySelector('.home');
let n = 0;
home.innerHTML = n;

let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');

function score1() {
    n+=1;
    number.innerHTML = n;
    console.log(n);
}
function score2() {
    n+=2;
    number.innerHTML = n;
    console.log(n);
}
function score3() {
    n+=3;
    number.innerHTML = n;
    console.log(n);
}

btn1.addEventListener('click',score1,false);
btn2.addEventListener('click',score2,false);
btn3.addEventListener('click',score3,false);