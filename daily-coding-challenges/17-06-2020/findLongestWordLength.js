/*
 * Source: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string
 * 
 * Write a simple function that takes a text and returns the length of the longest word in the text.
 * Example
 * -------
 * findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6 
 * Because the longest word 'jumped' and its length is 6;
*/


const findLongestWordLength = (str) => {
	/* Your implementation goes here */
if (!str) {
   return 0;
}	
 let strSplit = str.split(" ");
  let longestWord = 0;
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i].length;
    }
  }
  return longestWord;
}

/** Sample Tests
 * They should all print true if your code is correct
 **/
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog") === 6);
console.log(findLongestWordLength("abc") === 3);
console.log(findLongestWordLength("This this this") === 4);
console.log(findLongestWordLength("") === 0);
console.log(findLongestWordLength() === 0);
