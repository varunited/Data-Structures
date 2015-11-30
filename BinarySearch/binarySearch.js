function binarySearch(val, arr, first, last) {
	var mid = (first+last)/2;
	//console.log(mid);
	if(val == arr[mid]) {
		console.log("Element "+val+" found at position:"+mid);
		return;
	}
	else if(val < arr[mid]) {
		binarySearch(val,arr,first,mid);
	}
	else if(val > arr[mid]) {
		binarySearch(val,arr,mid,last);
	}
	else if(first >= last) {
		return;
	}
}

var arr = [2,5,8,12,16,36,47,67,88];
var val = 67;
binarySearch(val, arr, 0, arr.length-1);
console.log(arr);
