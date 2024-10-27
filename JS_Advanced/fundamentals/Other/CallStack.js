function Multiplay(x, y) {
  return x * y;
}

function squared(n) {
  return Multiplay(n, n);
}
function PrintSquare(n){
    return squared(n)
}

const Print=PrintSquare(10)
console.log(Print)
