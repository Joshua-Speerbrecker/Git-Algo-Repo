// Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8, [-5,2,5,12] returns 14)

function iterArr(arr) {
    // give a variable that will hold on to the sum at any given time
    var sum = 0;
    // loop that will go through each index of the array
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

arr = [1,2,5]
console.log(iterArr(arr));