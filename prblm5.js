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
        return "please input a number"
    }

}

const result = gemsToDiamond( 20, 200, 50);
console.log(result);