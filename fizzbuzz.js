function FizzBuzz(){
  // For each number less than 20 //
    for(var i=1; i<=20; i++){
      //If number is divisible by 3 AND 5, print FizzBuzz //
        if(i % 3 === 0 && i % 5 === 0){
            console.log(i+'FizzBuzz');
          //ELSE, IF number is divisible by 3, print Fizz //
        } else if(i % 3 === 0){
            console.log(i+' Fizz');
          //ELSE, IF number is divisible by 5, print Buzz //
        } else if(i % 5 === 0){
            console.log(i+' Buzz');
          //ELSE, print number
        } else {
            console.log(i);    
        }
      
    } 
}FizzBuzz();