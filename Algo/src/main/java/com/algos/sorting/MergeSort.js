const merge = (arr1, arr2) => {
		let i = 0, 
		j = 0,
		results = [];
		while(i<arr1.length && j<arr2.length){
			if(arr1[i] <= arr2[j]){
				results.push(arr1[i++]);
			}else{
				results.push(arr2[j++]);
			}
		}
		while(i<arr1.length)
			results.push(arr1[i++])
		while(j<arr2.length)
			results.push(arr2[j++])
		return results;
}

const mergeSort = (arr) => {
		if(arr.length<=1) return arr;
		let mid = Math.floor(arr.length/2)
		let left = mergeSort(arr.slice(0, mid));
		let right = mergeSort(arr.slice(mid));
		console.log(`left -> ${left}, right -> ${right} and arr -> ${arr}`);
		return merge(left, right);
}

/* 
	SLICE does not change the original array
 */
console.log(mergeSort([1,5,9,3,2,6,4,7,0,8,1]))

