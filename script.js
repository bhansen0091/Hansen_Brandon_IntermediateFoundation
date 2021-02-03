
/* //Sigma

function sigma(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        if (num > 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sigma(3));
console.log(sigma(5));

*/

//------------------------------------------------------

/* //Factoral

function factoral(num) {
    var product = 1;
    for (var i = 1; i <= num; i++) {
        if (num > 0) {
            product *= i;
        }
    }
    return product;
}

console.log(factoral(3));
console.log(factoral(5));

*/

//------------------------------------------------------

/* //Fibonacci

function fibonacci(num) {
    var previous = 0;
    var current = 1;
    var sum = 1;
    for (var i = 2; i <= num; i++) {
        sum = previous + current;
        previous = current;
        current=sum;
    }
    return sum;
}
console.log(fibonacci(2));
console.log(fibonacci(5));
console.log(fibonacci(7))

*/

//------------------------------------------------------

/* //Second to Last

var testArr = [42, true, 4, "Liam", 7]
var testArr2 = [];
function secondToLast(arr){
    if (arr.length > 0) {
        return arr[arr.length-2];
    }
    else{
        return null;
    }
}

console.log(secondToLast(testArr));
console.log(secondToLast(testArr2));

*/

//------------------------------------------------------

/* //Array Nth-to-Last

var testArr = [5,2,3,6,4,9,7];
function nThToLast(arr, num) {
    if (arr.length > 0) {
        return arr[arr.length - num];
    }
    else{
        return null;
    }
}

console.log(nThToLast(testArr,3));

*/

//------------------------------------------------------

/* //Array Second-Largest

var testArr = [42,1,4,3.14,7];
var testArr2 = [100,5,358,4,2,6];
function getSecondLargest(arr) {
    
    var secondLargest = 0;
    var max = arr[0];
    if (arr.length > 0) {
        for (var i = 0; i <= arr.length; i++) {
            if (arr[i] > max) {
                secondLargest = max;
                max = arr[i];
            }
            else if (arr[i] < max && arr[i] > secondLargest) {
                secondLargest = arr[i];
            }
        }
        return secondLargest
    }
    else{
        return null;
    }
}

console.log(getSecondLargest(testArr));
console.log(getSecondLargest(testArr2));

*/

//------------------------------------------------------

 //Double Trouble

var testArr = [4, "Ulysses", 42, false];
function doubleTrouble(arr) {
    var counter = 0;
    for (var i = 0; i < arr.length; i+=2) {
        arr.splice( i, 0, arr[i])
    }
    return arr;
}

console.log(doubleTrouble(testArr));