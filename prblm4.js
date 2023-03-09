function findingBadData(array){

    const badData = [];
     for(let i = 0; i< array.length; i++){

        if(array[i] < 0 ){
            badData.push(array[i]);
        }
        
     }
     return badData.length;
    
}

const myArray = [ 2, -5, -7, -13 ,-14];
const result = findingBadData(myArray);
console.log(result)

