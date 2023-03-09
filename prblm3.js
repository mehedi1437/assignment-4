function isLGSeven(number){
   const fixedNumber = 7;

   if(number-7  < fixedNumber && typeof number === "number"){
          return number-7;
   }
   else if ( number-7 > fixedNumber && typeof number === "number"){
        return number * 2;
   }
   else{
     return "It is not a number. please input a number"
   }
}

const  result = isLGSeven(-15);
console.log(result);