module.exports = function reverse (n) {
    let result = ''; 
    if (n<0) n *= -1;
    while(n>0){ 
     result = result + (n%10); 
     n = parseInt(n/10); 
    } 
    return result; 
  } 

