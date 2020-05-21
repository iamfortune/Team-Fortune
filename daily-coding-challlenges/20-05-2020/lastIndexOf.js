/*
 *
 * The string type in JavaScript has a lastIndexOf (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf) method. 
 * Write your own implementation of this method in a function called myLastIndexOf. 
 * The function should take in an array and a search value and work as intended.
 */



const myLastIndexOf = (searchTerm, searchVal) => {
	/* Your implementation goes here */
  searchVal = searchVal.split("");
  searchTerm = Array.isArray(searchTerm) ? searchTerm : searchTerm.split("");
  const lengthOfSearchVal =
    searchVal.toString().length === 1 ? 1 : searchVal.toString().length - 1;
  let indexArray = [];

  const lengthOfArray = searchTerm.length;
  for (let j = 0; j < lengthOfArray; j++) {
    if (searchVal[0] === searchTerm[j].toString()) {
      indexArray.push(j);
    }
  }

  const lengthOfIndexArray = indexArray.length;
  let index = 0;
  for (let i = 0; i < lengthOfIndexArray; i++) {
    let prevIndex = index;
    index = indexArray[i];
    const match = searchTerm.slice(index, index + lengthOfSearchVal).join("");
    const check = searchVal.join("");

    if (match === check && i === lengthOfIndexArray - 1) {
      return index;
    } else if (match != check && i === lengthOfIndexArray - 1) {
      return prevIndex;
    }
  }
  return -1;
};