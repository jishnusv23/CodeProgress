// class solution {
//   /**
//    *
//    * @param {string[]} strs
//    * @returns {string} 
//    */
//   econde(strs) {}
// }
let arr= [1, 5, 1, 9, 3, 9, 2, 3, 9, 5, 8, 8, 0, 1, 0, 1];
let obj={}
for(let i=0;i<arr.length;i++){
    obj[arr[i]]=(arr[i]||0)+1
}
console.log(obj)