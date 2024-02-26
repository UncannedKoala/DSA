const swap = (arr, i, j) => {
	[arr[i], arr[j]] = [arr[j], arr[i]]
}

const pivot = (arr, left = 0, end = arr.length-1) =>{
	let pivot = arr[left];
	let swapIndex = left;			//swapIndex is the assumed final position of the pivot, and it is also equal to the (number of elements less than pivot)since 0 is also counted in indexes we get the index at which pivot should sit
	console.log(`current array @pivot() -->> ${arr}`)
	console.log(`pivot ::${pivot},initial swapIndex ::${swapIndex}`)
	for(let i = left+1; i <= end; i++){
		console.log(`comparing ::${pivot} with ::${arr[i]} in arr -->> ${arr}`)
		if(arr[i] < pivot){		//found element less than pivot
			swapIndex++;
			console.log(`swapping swap(arr, swapIndex, i) -->> ([${arr}], ${swapIndex}, ${i})`)
			swap(arr, swapIndex, i)
			console.log(`swap resulting array -> ${arr}`)
		}
	}
	console.log(`swapping index ::${left} with index ::${swapIndex} in arr -->> ${arr}`)
	swap(arr, left, swapIndex)
	console.log(`resulting array -> ${arr}`)
	console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> pivot " + pivot)
	return swapIndex;
}

const quickSort = (arr, left = 0, right = arr.length-1) => {
	if(left < right){
		console.log(`current array @quickSort() -->> ${arr}`)
		let pivotIndex = pivot(arr, left, right);
		//left
		quickSort(arr, left, pivotIndex-1);
		//right
		quickSort(arr, pivotIndex+1, right);
	}
	return arr;
}

console.log(quickSort([3,1,4,2]))
console.log(`##############`)
console.log(quickSort([42,8,2,1,5,7,6,3]))
console.log(`##############`)