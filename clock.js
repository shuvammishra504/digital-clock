const date = document.querySelector('.date');
const maina = document.querySelector('.month');
const tarikh = document.querySelector('.tarikh');
const barsa = document.querySelector('.barsa');
const day = document.querySelector('.day')

const samayaDiv = document.querySelector('.time');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

function NepalDate(){
    const time = Date();
    console.log(time)
    var month = time.slice(4, 7);
    var tarikhValue = time.slice(8, 10);
    var din = time.slice(0, 4);
    var year = time.slice(11, 15);
    var ghanta = time.slice(16,18);
    var minut = time.slice(19, 21);
    var sec = time.slice(22, 24);

    day.innerHTML = din;
    maina.innerHTML = month;
    tarikh.innerHTML = tarikhValue;
    barsa.innerHTML = year
    hour.innerHTML = ghanta;
    minute.innerHTML = minut;
    second.innerHTML = sec;
}

setInterval(NepalDate, 1000);


var time = new Date();
console.log(
  time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
);