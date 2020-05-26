/*
 * The string type in JavaScript has an index (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) method. 
 * Write your own implementation of this method in a function called myIndex. 
 * The function should take in an array and a search value and work as intended.
 * 
 * Example: myIndexOf([12, 8, -3, 4], -3) should return 2;
*/
const myIndexOf = (arr, searchVal) => {
	/* Your implementation goes here */
}

const myLastIndexOf = (arr, searchVal) => {
  /* Your implementation goes here */
  let valIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == searchVal) {
      valIndex = i;
    } 
  }
  return valIndex;
};