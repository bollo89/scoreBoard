let home = document.querySelector('.home');
let n = 0;
home.innerHTML = n;

let away = document.querySelector('.away');
let m = 0;
home.innerHTML = m;

let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
//punkty po lewej
function score1home() {
    n+=1;
    number.innerHTML = n;
    console.log(n);
}
function score2home() {
    n+=2;
    number.innerHTML = n;
    console.log(n);
}
function score3home() {
    n+=3;
    number.innerHTML = n;
    console.log(n);
}
//punkty po prawej
function score1away() {
    m+=1;
    number.innerHTML = n;
    console.log(m);
}
function score2away() {
    m+=2;
    number.innerHTML = n;
    console.log(m);
}
function score3away() {
    m+=3;
    number.innerHTML = n;
    console.log(m);
}

//przyciskibtn1.addEventListener('click',score1home,false);
btn2.addEventListener('click',score2home,false);
btn3.addEventListener('click',score3home,false);
btn1.addEventListener('click',score1away,false);
btn2.addEventListener('click',score2away,false);
btn3.addEventListener('click',score3away,false);