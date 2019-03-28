
// 1. A function which prints str after n seconds.

function printTimeout(str, n){

    setTimeout( function(){
      console.log(str);
    }, n * 1000);
      
    };
    printTimeout('hello', 10);

// 2. A function which result =s sum of all numbers from 1 to n using recursion.

    function sumAll(n) { 
      let result;

      if(n !== 1){
        result = n + sumAll(n-1);
      } else {
        result = n;
      }
      return result;
    }

    sumAll(2); // 3
    sumAll(4); // 10

// 3. A function which takes str and time in seconds as arguments, then every second it should count down from time to 0 and print current time to console when time equals to 0 it prints str

        function bombTimer(str, time) { 
          let interval;
          interval = setInterval(function(){
          let result;
          result = time--;
          console.log(result)
           }, 1000);
 
        let timer = setTimeout(function(){
         console.log(str);
         clearInterval(interval);
         }, time * 1000);
        }
        bombTimer('Boooom', 3);
  

    // 4. A function which returns factorial of number using recursion.


        function factorial(n) { 
         let result;
          if(n !== 1) {
            result = n * factorial(n-1);
          } else {
            result = n;
          }
            return result;
         }
        factorial(3); // 6
        factorial(5); // 120 

// 5. Implement function from task №3 (bombTimer) using recursion and setTimeout.

function recursionBomb(str, n) {
  let number = n;
  
  let timer = setTimeout(function bomb(){
   if (number >= 1){
    console.log(number--);
    setTimeout(bomb, 1000);
  } else {
  setTimeout(function string(){
    console.log(str);
  }, 50);
 }
}, 1000);
}
recursionBomb('booom', 3);
