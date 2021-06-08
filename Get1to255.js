// Write a function that returns an array with all the numbers from 1 to 255. You may use the push() function for this exercise.

function get_array() {
    // create a new array
    var arr = [];
    // loop through the array
    for(var i =1; i < 256; i++){
        // push each number into the array 
        arr.push(i)
    }
    return arr;
}

console.log(get_array());