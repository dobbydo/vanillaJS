const images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","0.jpg"];
const numberImage = Math.floor(Math.random() * images.length);
let i = numberImage;

document.body.style.backgroundImage = `url(../img/1.jpg)`;

const backplay = document.querySelector("#bgImg button:nth-child(1)");
const stopplay = document.querySelector("#bgImg button:nth-child(2)");
const nextplay = document.querySelector("#bgImg button:nth-child(3)");
const randomplay = document.querySelector("#bgImg button:nth-child(4)");

function backplays(){
    if(i==0){
        i = 6;
        document.body.style.backgroundImage = `url(../img/${i}.jpg)`;
    }else{
        i--;
        document.body.style.backgroundImage = `url(../img/${i}.jpg)`;
    }
    console.log(i);
}

function stoplays(){
    i = numberImage
    document.body.style.backgroundImage = `url(../img/${i}.jpg)`;
}

function nextplays(){
    if(i==6){
        i = 0;
        document.body.style.backgroundImage = `url(../img/${i}.jpg)`;
    }else{
        i++;
        document.body.style.backgroundImage = `url(../img/${i}.jpg)`;
    }
    console.log(i);
}

function randomplays(){
    a = Math.floor(Math.random() * images.length);
    document.body.style.backgroundImage = `url(../img/${a}.jpg)`;
    console.log(a);
}

backplay.addEventListener("click", backplays);
stopplay.addEventListener("click",stoplays);
nextplay.addEventListener("click",nextplays);
randomplay.addEventListener("click",randomplays);