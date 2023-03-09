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
const result = mindGame(33);
console.log(result);