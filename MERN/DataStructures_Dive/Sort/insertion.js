function InsertionSort(arr){
    let i=0
    while (i<arr.legnth) {
        let key=arr[i]
        let j=i-1
        while (j>=0&&arr[j]>key) {
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]=key
        i++
    }
    return arr
}

const arr = [3, 4, 56, -90, -78, -67, 676];
console.log(InsertionSort(arr))