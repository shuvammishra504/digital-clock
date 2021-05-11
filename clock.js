const date = document.querySelector('.date');
const maina = document.querySelector('.month');
const tarikh = document.querySelector('.tarikh');
const barsa = document.querySelector('.barsa');
const day = document.querySelector('.day')

const samayaDiv = document.querySelector('.time');
const samaya = document.querySelector('.samaya'); 

function NepalDate(){
    const time = Date();
    var din = time.slice(0, 4);
    var year = time.slice(11, 15);

    day.innerHTML = din;
    barsa.innerHTML = year
}

function myFunction(){
  var timeDate = new Date();
  var timeValue =   timeDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
  samaya.innerHTML = timeValue;
}

function month(){
  const newDate = new Date();
  var anotherDate = new Date()
  newDate.setMonth(0);
  var newGate = newDate.setDate(28);
  var year = newDate.setFullYear(2078);
  var months = ["Baisakh","Jestha","Ashar","Shrawn","Bhadra","Ashwin","Kartik","Mangsir","Poush","Magh","Falgun","Chaitra"];
  // var gate = newDate.slice(7, 9);

  maina.innerHTML = months[newDate.getMonth()];
  console.log(newDate);
}

setInterval(month, 1000);

setInterval(myFunction, 1000);

setInterval(NepalDate, 1000);


