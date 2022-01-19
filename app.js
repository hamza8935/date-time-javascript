let result = document.getElementById('result') ;
let btn = document.getElementById('btn') ;
  let count = 0 

let count1 ;
let interval =  setInterval(() => {
        count1 = count++ ;
    result.innerText = count1

  

}, 1000);


  
setTimeout(() => {
    clearInterval(interval)
    
}, 5000);