let time = document.getElementById('time') ;

// let date4 = new Date().setHours(12) ;
// console.log(date4);
// let date5 = new Date().setMinutes(33);
// let date6 = new Date().setSeconds(00);
//     let total1 =  `${date4} : ${date5} : ${date6}`
// console.log(total1);
setInterval(() => {
    
    

 
let date1 = new Date().getHours();
let date2 = new Date().getMinutes();
let date3 = new Date().getSeconds();
let total = `Current time is :${date1} : ${date2} : ${date3}`
//console.log(total);

time.innerText = total ;

// let date4 = new Date().getHours(12) ;
// let date5 = new Date().getMinutes(6);
// let date6 = new Date().getSeconds(00);
//     let total1 =  `${date4} : ${date5} : ${date6}`
// console.log(total1);
    // if (total === total1) {
    //     alert('please do the task') ;
    // }

},1000);

