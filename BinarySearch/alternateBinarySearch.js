function binarySearch(val, arr) {
	var mid = parseInt(arr.length/2);
	//console.log(mid);
	if(val == arr[mid]) {
		console.log("Element "+val+" found at position:"+mid);
		console.log(arr);
		return [true, mid];
	} else if(val < arr[mid]) {
		arr = arr.slice(0,mid+1);
		return binarySearch(val,arr);
	} else if(val > arr[mid]) {
		arr = arr.slice(mid,arr.length);
		returned_arr = binarySearch(val, arr)
		return [returned_arr[0], returned_arr[1] + mid];
	} else if(arr.length > 0) {
		return [false, -1];
	}
}

var arr = [2,5,8,12,16,36,47,67,88];
var val = 88;
//console.log(arr);
console.log(binarySearch(val, arr));
console.log(arr);
