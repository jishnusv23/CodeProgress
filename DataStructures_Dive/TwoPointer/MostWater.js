const MaxArea=function(heights){
    let left=0
    let right=heights.length-1,max=0
    while (left<right) {
    let min=Math.min(heights[left],heights[right])*(right-left)
    max=Math.max(max,min)
    if(heights[left]<heights[right]){
        left++
    }else{
        right--
    }
    }
    return max
}
let height = [1, 7, 2, 5, 4, 7, 3, 6];
console.log(MaxArea(height))