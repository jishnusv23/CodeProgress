// ? Q . Greatest Common Divisor Of String

//------------------------FIRST TEST CASE -------------------------------------------------------------------------------------------------------
// let str1 = "ABCABC",
// str2 = "ABC";
//* Output: "ABC";

//--------------------SECOND TEST CASE------------------------------------------------------------------------------------------------------------
let str1="TAUXXTAUXXTAUXXTAUXXTAUXX",str2="TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX";
//*Output : "TAUXX"

//---------------------THIRD TEST CASE -----------------------------------------------------------------------------------------------------------
// let str1 = "LEET", str2 = "CODE";
//*Output: "";


// ? Q . Greatest Common Divisor Of String

const gcdOfStrings=(str1,str2)=>{
    if(str1+str2!==str2+str1) return ""

    function gcd(a,b){
        while(b!==0){
            let temp=b
            b=a%b
            a=temp
        }
        return a
    }
    let len =gcd(str1.length,str2.length)
    return str1.substring(0,len)
}
console.log(gcdOfStrings(str1,str2))