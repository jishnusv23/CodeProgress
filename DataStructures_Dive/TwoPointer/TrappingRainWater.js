let height = [0, 2, 0, 3, 1, 0, 1, 3, 2, 1];

// Output: 9;
function trap(height){
    let l=0,r=height.length-1
    let leftMax=height[l],rightMax=height[r]
    let result=0
    while (l<r) {
        if(leftMax<rightMax){
            l++
            leftMax=Math.max(leftMax,height[l])
            result+=leftMax-height[l]
        }else{
            r--
            rightMax=Math.max(rightMax,height[r])
            result+=rightMax-height[r]
        }
        

    }
    return result
}
console.log(trap(height))