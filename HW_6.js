// //1.
 function findAnagrams (str, arr) {
   let result = [];
   let sortedStr = str.split('').sort().join('');
   for (let i = 0; i < arr.length; i++){
     let sortedPossiblsAnagram = arr[i].split('').sort().join(''); 
     if (sortedStr === sortedPossiblsAnagram) result.push(arr[i]);
   }
   return result;
 }

console.log(findAnagrams('listen', ['enlists', 'google', 'inlets', 'banana']))

//2.
function findContiguousForN(str, N) {
  let result = [];
  for (let i = 0; i < str.length - N + 1; i++) {
    result.push(str.substr(i, N));
  }
  return result;
}

console.log(findContiguousForN('12345678', 5))

//3.
function shuffleArray(arr) {
  return arr.sort(() => {
    return Math.floor(Math.random() * 2) ? 1 : -1;
  });
}

console.log(shuffleArray([1, 5, 4, 8, 9, 12, 6, 0, 7]))

//4.
function concatAll() {
  let result = [];
  for (let i = 0; i < arguments.length; i++) {
    result = result.concat(arguments[i]);
  }
  return result;
}

console.log(concatAll([1, 2], [3, 4], [5], [6]));

//5.
function filter(arr, func) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
     if (func(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(filter([true, false, true, true], i => i === true))


function map(arr, func) {

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }

  return result;

}

console.log(map([1, 2, 3], i => `mapped_${i}`));


function reduce(arr, reducer, initialValue = 0) {

  let accumulator = initialValue;

  for (let i = 0; i < arr.length; i++) {
    accumulator = reducer(accumulator, arr[i]);
  }

  return accumulator;

}

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(reduce(array1, reducer));


function forEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
   func(arr[i]);
 }
}

forEach([1, 2, 3], i => console.log(`foreach ${i}`))
