function rotateSortedArray(arr, pivot) {
  if (pivot > arr.length || pivot < 0) return arr;

  let first = arr.slice(pivot);
  let second = arr.slice(0, pivot);
  return [...first, ...second];
}
let Array = [1, 2, 3, 4, 5, 6, 7];
let pivot = 3;
console.log(rotateSortedArray(Array, pivot));

function rotateSortedArrayWithout(arr,pivot){
    if (pivot > arr.length || pivot < 0) return arr;

    let result =[]
    for(let i=pivot;i<arr.length;i++){
        result.push(arr[i])
    }
    for(let i=0;i<pivot;i++){
        result.push(arr[i])
    }
    return result

}

console.log(rotateSortedArrayWithout(Array,pivot))