//? Q . Reverse Vowels  of  a String

//! The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

//-----------------------------------FIRST TEST CASE---------------------------------------------------------------------------------------
let s = "IceCreAm";
//* Output: "AceCreIm
//-----------------------------------SECOND  TEST CASE----------------------------------------------------------------------------------------------------------------

//* let s = s = "leetcode";
//* Output: "leotcede";

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


const reverseVowels=(s)=>{
    const vowels=["a","e","i","o","u","A","E","I","O","U"]
    let array=s.split('')
    let left=0,right=array.length-1
    while(left<=right){
        if(vowels.includes(array[left])){
            if(vowels.includes(array[right])){
                [array[left],array[right]]=[array[right],array[left]]
                left++
                right--
            }else{
                right--
            }
        }else{
            left++
        }
    }
    return array.join("")
}
console.log(s)
 