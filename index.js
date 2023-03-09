// Problem ------> 1

/*
This is a mind game function.If a number is given as input, multiply it by 3, add by 10, divide by 2, subtract by 5, and it will provide output.
*/ 

function mindGame(number){
    const multiple = number * 3;
    const addition = multiple + 10;
    const divition = addition / 2;
    const subtruction = divition - 5;

    if(typeof number === "number"){
      return subtruction;
    }
    else if(typeof number !== "number"){
      return "It is not a number,please input a Number";
    }
      
}
// const result = mindGame(5);
// console.log(result);



// Problem ------> 2

/*
This is an even or odd cheaker function. if the input word's length is a even number then output will be even. and the input word's length is a odd number then output will be odd.
 */

function evenOdd(text){

    if(text.length % 2 === 0 && typeof text === "string"){
        return "even";
    }
    else if(text.length % 2 !== 0 && typeof text === "string"){
        return "odd";
    }
    else{
        return "Please input a string";
    }
   
}

// const result = evenOdd("Phero");
// console.log(result);


// Problem ------> 3

/*
If a number is given as input.  Subtract 7 from this input.and the result is less than 7 then the result will be retruned.and the subtract result is greater than 7, then the final result is input multiplied by 2.
 */
function isLGSeven(number){
    const fixedNumber = 7;
 
    if(number-7  < fixedNumber && typeof number === "number"){
           return number-7;
    }
    else if ( number-7 > fixedNumber && typeof number === "number"){
         return number * 2;
    }
    else{
      return "It is not a number. please input a number";
    }
 }
 
//  const  result = isLGSeven(15);
//  console.log(result);



// Problem ------> 4

/*
This is a bad data's length finding function
*/ 

function findingBadData(array){

    const badData = [];
     for(let i = 0; i< array.length; i++){

        if(array[i] < 0 ){
            badData.push(array[i]);
        }
        
     }
     return badData.length;
    
}

// const myArray = [ 2, -5, -7, -13 ];
// const result = findingBadData(myArray);
// console.log(result)




// Problem ------> 5

/*
This function get 3 input parameter. 1st input multiplied by 21,second input multiplied by 32, third input multiplied by 43. and the 3 input's multipiled result's total is greater than 2000 . then total subtructed by 2000 and then returned the output . and the total is less than 2000, then the total will the the final output
*/ 

function gemsToDiamond(firstFriendGems,secondFriendGems,thirdFriendGems){
    const firstFriendGemToDiamond = firstFriendGems * 21;
    const secondFriendGemToDiamond = secondFriendGems * 32;
    const thirdFriendGemToDiamond = thirdFriendGems * 43;

    const totalDiamond = firstFriendGemToDiamond + secondFriendGemToDiamond + thirdFriendGemToDiamond;

    if(totalDiamond > 2000 && typeof firstFriendGems === "number" && typeof secondFriendGems === "number" && typeof thirdFriendGems === "number"){
        return totalDiamond - 2000;
    }
    else if(totalDiamond < 2000 && typeof firstFriendGems === "number" && typeof secondFriendGems === "number" && typeof thirdFriendGems === "number"){
       return totalDiamond;
    }
   else{
       return "please input a number";
   }

}

// const result = gemsToDiamond( 20, 200, 50);
// console.log(result);

