const para = document.querySelector('.test');

var newDate = new Date();
var anotherDate = new Date()
newDate.setMonth(0); 
var newGate = newDate.setDate(28);
var year = newDate.setFullYear(2078);
var months = ["Baisakh","Jestha","Ashar","Shrawn","Bhadra","Ashwin","Kartik","Mangsir","Poush","Magh","Falgun","Chaitra"];
var 

console.log(newDate)

para.innerHTML = months[newDate.getMonth()];