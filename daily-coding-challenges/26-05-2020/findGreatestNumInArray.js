/*
 * Write a function to find the greatest number in an array, otherwise return -1
 * Example: findGreatestNumInArray([12, 8, -3, 4]) should return 12;
*/
const findGreatestNumInArray = (arr) => {
	/* Your implementation goes here */
	if (arr.legnth ==1) {return arr[0]}
	let maxNum = arr[0];
	for(let i = 1; i < arr.length; i++) {
		if(arr[i] > maxNum){
			maxNum = arr[i];
		} 
	}
	return maxNum;
} 