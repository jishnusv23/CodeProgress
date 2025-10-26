//? Q. Can Place Flowers 605

//--------------------------------------TEST CASE-1------------------------------------------------------------------------------------------
// let flowerbed = [1, 0, 0, 0, 1],
//   n = 1;
// Output: true;

//--------------------------------------TEST CASE-2------------------------------------------------------------------------------------------
let flowerbed = [1, 0, 0, 0, 1],n=2
// Output: false;

//-------------------------------------------------------------------------------------------------------------------------------------------

const   canPlaceFlowers=(flowerbed,n)=>{
  if( n===0) return false

  for(let i=0;i<flowerbed.length-1;i++){
    if(flowerbed[i]==0){
      const emptyLeft=(i===0)||(flowerbed[i-1]===0)
      const emptyRight=(i===flowerbed.length-1)||(flowerbed[i+1]===0)
      if(emptyLeft&&emptyRight){
        flowerbed[i]=1
        n--
        if(n===0) return true
        i++
      }
    }
  }
  return false

}
console.log(canPlaceFlowers(flowerbed,n))