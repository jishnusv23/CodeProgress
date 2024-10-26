const debounce = (mainFunction, dealy) => {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      mainFunction(...args);
    }, dealy);
  };
};

function SearchData(){
    console.log('Finding the Result With in the time')
}
const debounceFunction=debounce(SearchData,3000)
debounceFunction()