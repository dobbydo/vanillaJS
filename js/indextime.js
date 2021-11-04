const clock = document.querySelector("#clock h1:nth-child(1)");
const id = localStorage.getItem("username");
console.log(id);


function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

const ddayClock = document.querySelector("#dday");
function dDaycount(){
    const eveDay = new Date("2021-12-25 00:00:00+0900");
    const currentDay = new Date();
    const dDaycounter = eveDay - currentDay;

    const day = String(Math.floor(dDaycounter / (1000 * 60 * 60 * 25))).padStart(2,"0");
    const hour = String(Math.floor((dDaycounter % (1000 * 60 * 60 * 24))/ (1000 * 60 * 60))).padStart(2,"0");
    const minutes = String(Math.floor((dDaycounter % (1000 * 60 * 60)) / (1000 * 60))).padStart(2,"0");
    const seconds = String(Math.floor((dDaycounter % (1000 * 60)) / 1000)).padStart(2,"0");

    ddayClock.innerText = `${day}:${hour}:${minutes}:${seconds}`;
}
dDaycount();
setInterval(dDaycount, 1000);

function hidden(){
    if(id === null){
        clock.classList.remove("hidden");
        ddayClock.classList.add("hidden");
    }else{
        clock.classList.add("hidden");
        ddayClock.classList.remove("hidden");
    }
}

hidden();