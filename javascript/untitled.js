var array = [1,2,3,4];
var array2 = ["a","b","c"];
function printReverse(input) {
	for(var i = input.length; i >= 0; i--) {
		console.log(input[i]);
	}
}

printReverse(array);
printReverse(array2);

var uniformArray = ["b","b","b"];
function isUniform(input1) {
	var x = input1[0];
	var uniform;
	input1.forEach(function(element) {
		if(element === x) {
			x = element;
			uniform = true;
		} else {
			uniform = false;
		}
	});
	return uniform;
}

console.log(isUniform(uniformArray));

var sumArray = [1,2,3];
function sumOfArray(input2) {
	var total = 0;
	input2.forEach(function(element) {
		total = total + element;
	});
	return total;
}

console.log(sumOfArray(sumArray));

var maxArray = [1,2,3];
function maxOfArray(input3) {
	var max = 0;
	input3.forEach(function(element) {
		if (element > max) {
			max = element;
		}
	});
	return max;
}

console.log(maxOfArray(maxArray));