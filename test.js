const para = document.querySelector('.test');
const gate = document.querySelector('.gate');
const barsa = document.querySelector('.barsa');

function myFunction(){
    var time = new Date();
        console.log(
        time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
        );  
}

setInterval(myFunction, 1000)