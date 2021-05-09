const date = document.querySelector('.date');
const maina = document.querySelector('.month');
const tarikh = document.querySelector('.tarikh');
const barsa = document.querySelector('.barsa');
const day = document.querySelector('.day')

const samayaDiv = document.querySelector('.time');
const samaya = document.querySelector('.samaya');

function NepalDate(){
    const time = Date();
    console.log(time)
    var month = time.slice(4, 7);
    var tarikhValue = time.slice(8, 10);
    var din = time.slice(0, 4);
    var year = time.slice(11, 15);
    var ghadi = time.slice(16, 21);

    day.innerHTML = din;
    maina.innerHTML = month;
    tarikh.innerHTML = tarikhValue;
    samaya.innerHTML = ghadi;
}

setInterval(NepalDate, 1000);
