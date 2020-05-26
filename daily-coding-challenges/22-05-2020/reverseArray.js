/*
 * Write a simple function to reverse the elements of an array
 * Example: reverseArray([12, 8, -3, 4]) should return [4, -3, 8, 12];
*/

// First lets get an array

const array1 = ["i", "love", "hip", "hop", "and", "billie", "eilish"];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// New array 
const newArray = [];


const reverseArray = (arr) => {
  /* Your implementation goes here */
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}

console.log(reverseArray(array1));