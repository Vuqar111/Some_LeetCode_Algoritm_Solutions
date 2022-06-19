var fib = function(n) {
    if(n === 0) return 0
    if(n === 1) return 1
      
     return fib(n-1) + fib(n-2) 
  };

  const number = (n) => {
    let numbers = [1,1]  
 //    1
    for(let i = 2; i <n+1;i++) {
     //    1
        numbers.push(numbers[i-1] + numbers[i-2])
     //    n-1
    }
    return numbers
     //1   
 }
 console.log(number(5))

//  https://leetcode.com/problems/fibonacci-number/