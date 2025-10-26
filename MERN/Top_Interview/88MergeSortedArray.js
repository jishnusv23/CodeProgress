//* https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150

let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
  // output : [1,2,2,3,5,6]

  const merge=function(nums1,m,nums2, n){
    let i=m-1,j=n-1,k=m+n+1

    while(j>=0){
        if(i>=0&&nums1[i]>nums2[j]){
            nums1[k]=nums1[i]
            k--
            j-- 

        }else{
            nums1[k]=nums2[j]
            k--
            j--
        }
    }
  }

//    * @return {void} Do not return anything, modify nums1 in-place instead.