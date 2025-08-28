//! Q : https://leetcode.com/problems/container-with-most-water/description/?envType=study-plan-v2&envId=leetcode-75

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]; //* output :49
let height1 = [1, 1]; //* output : 1
/**
 * @param {number[]} height
 * @return {number}
 */

const maxArea=(height)=>{
    let i=0,j=height.length-1
    let ans=0
    while(i<j){
        const area=Math.min(height[i],height[j])*(j-i)

        ans=Math.max(ans,area)
        if(height[i]<height[j]){
            i++
        }else{
            j--
        }
    }
    return ans
}
console.log(maxArea(height))