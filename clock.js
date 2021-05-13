const date = document.querySelector('.date');
const maina = document.querySelector('.month');
const tarikh = document.querySelector('.tarikh');
const barsa = document.querySelector('.barsa');
const day = document.querySelector('.day')

const samayaDiv = document.querySelector('.time');
const ghanta = document.querySelector('.hours'); 
const minute = document.querySelector('.minute'); 
const second = document.querySelector('.second'); 
const amPm = document.querySelector('.amPm'); 

function NepalDate(){
    const time = Date();
    var din = time.slice(0, 4);
    var year = time.slice(11, 15);
    var month = time.slice(4, 7);
    var tarikhValue = time.slice(8, 10);

    console.log(time)
    day.innerHTML = din;
    barsa.innerHTML = year;
    maina.innerHTML = month;
    tarikh.innerHTML = tarikhValue;
}

function myFunction(){
  var time = new Date();
    var timeValue = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }) 
    var ghantaValue = timeValue.slice(0, 2);
    var minuteValue = timeValue.slice(3, 5);
    var secondValue = timeValue.slice(6, 8);
    var amPmValue = timeValue.slice(9, 12);


  console.log(timeValue)

  var splitHour = timeValue.slice(1, 2);
  if(splitHour === ":") {
    ghantaValue = timeValue.slice(0, 1);
    minuteValue = timeValue.slice(2, 4);
    secondValue = timeValue.slice(5, 7);
    amPmValue = timeValue.slice(8, 11)
  }
  ghanta.innerHTML = ghantaValue;
  minute.innerHTML = minuteValue;
  second.innerHTML = secondValue;
  amPm.innerHTML = amPmValue;
}
setInterval(myFunction, 1000)

setInterval(NepalDate, 1000);


