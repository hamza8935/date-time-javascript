let time = document.getElementById('time') ;


setInterval(() => {
   
let date1 = new Date().getHours();
let date2 = new Date().getMinutes();
let date3 = new Date().getSeconds();
let total = `Current time is :${date1} : ${date2} : ${date3}`

time.innerText = total ;
    
},1000);

