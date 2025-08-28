//? Q . 1431 Kida With Greatest Number Of Candies

//---------------------------TEST CASE 1 --------------------------------------------
let candies = [2, 3, 5, 1, 3], extraCandies = 3
// Output: [true, true, true, false, true]; 

//---------------------------TEST CASE 2---------------------------------------------
// let candies = [4, 2, 1, 1, 2], extraCandies = 1
// Output: [true, false, false, false, false]; 




const kidsWithCandies = (candies, extraCandies) => {
  let max = Math.max(...candies);

  return candies.map((candi) => candi + extraCandies >= max);
};
console.log(kidsWithCandies(candies, extraCandies));
