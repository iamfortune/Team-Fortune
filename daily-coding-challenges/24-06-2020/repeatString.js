/*
 * Source: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string
 * 
 * Write a simple function that repeats a given string str (first argument) for num times (second argument). 
 * Return an empty string if num is not a positive number.
 * 
 * Example
 * -------
 * repeatStringNumTimes("*", 3) should return '***' 
 * repeatStringNumTimes("abc", 1) should return 'abc'.
*/


const repeatStringNumTimes = (str, num) => {
	/* Your implementation goes here */
	if(num === 0) {
		return null
	}
	if(num > 0) 
	return str.repeat(num);
	else 
	return "";
}

/** Sample Tests
 * They should all print true if your code is correct
 **/
console.log(repeatStringNumTimes('abc', 1) === 'abc');
console.log(repeatStringNumTimes('*', 5) === '*****');
console.log(repeatStringNumTimes('repeat', -1) === '');
console.log(repeatStringNumTimes('abc', 0));
