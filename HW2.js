for(i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if(i % 3 == 0) {
        console.log("Fizz");
    } else if(i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
}   }

function getAverage(array = []) {
    let total = 0;

    for(i in array) {
        total += array[i];
    }

    return Math.floor(total / array.length);
}

console.log(getAverage([10, 15, 20, 25, 30]));
