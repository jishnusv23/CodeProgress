function higherOderFunction(callback) {
  const resutl = callback(5);
  return resutl;
}
function callbackFunction(x) {
  return x * 2;
}

const finalResul = higherOderFunction(callbackFunction);
console.log(finalResul)