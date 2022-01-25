let home = document.querySelector('.home');
let n = 0;
home.innerHTML = n;

let away = document.querySelector('.away');
let m = 0;
away.innerHTML = m;

let btn1h = document.querySelector('.btn1h');
let btn2h = document.querySelector('.btn2h');
let btn3h = document.querySelector('.btn3h');
let btn1a = document.querySelector('.btn1a');
let btn2a = document.querySelector('.btn2a');
let btn3a = document.querySelector('.btn3a');
//punkty po lewej
function score1home() {
    n+=1;
    home.innerHTML = n;
    console.log(n);
}
function score2home() {
    n+=2;
    home.innerHTML = n;
    console.log(n);
}
function score3home() {
    n+=3;
    home.innerHTML = n;
    console.log(n);
}
//punkty po prawej
function score1away() {
    m+=1;
    away.innerHTML = m;
    console.log(m);
}
function score2away() {
    m+=2;
    away.innerHTML = m;
    console.log(m);
}
function score3away() {
    m+=3;
    away.innerHTML = m;
    console.log(m);
}

//przyciskibtn1.addEventListener('click',score1home,false);
btn1h.addEventListener('click',score1home,false);
btn2h.addEventListener('click',score2home,false);
btn3h.addEventListener('click',score3home,false);
btn1a.addEventListener('click',score1away,false);
btn2a.addEventListener('click',score2away,false);
btn3a.addEventListener('click',score3away,false);

// setInterval(myTimer, 1000);

function myTimer() {

  document.querySelector('.timer').innerHTML = 5;
}

btnTimer.addEventListener('click', myTimer,false);