


















// find relation 
// input: 1, 2, 3, 4, 5, 6
// output: 3, 6, 9, 12, 15, 18
function findRelation(arr) {
		let result = [];
		for (let i = 0; i < arr.length; i++) {
				result.push(arr[i] * 3);
		}
		return result;
}
