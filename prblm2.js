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

const result = evenOdd("true");
console.log(result);



