const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const ampm = document.getElementById("ampm");

function updateClock(){
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    ap = "AM";


    if(h>12){
        h = h-12;
        ap = "PM";
    }

    h = h<10 ? "0" + h :h;
    m = m<10 ? "0" + m :m;
    s = s<10 ? "0" + s :s;

    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;
    ampm.innerText = ap;
    setTimeout(() => {
        updateClock();
    },1000);
};

updateClock();