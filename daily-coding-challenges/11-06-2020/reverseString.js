/*
 * Write a simple function to reverse a string
 * Example: reverseString('Thisisgreat') should return 'taergsisihT';
*/

const reverseString = (str) => {
	/* Your implementation goes here */
	if (!str) {
    return null;
  }
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
  }

/** Sample Tests
 * They should all print true if your code is correct
 **/
console.log(reverseString('Thisisgreat'));
