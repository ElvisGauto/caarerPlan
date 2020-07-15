// Create an array of numbers

let numbers = [1, 2, 3, 4, 5];

// Create a variable to hold sum

let sum = 0;

function adder(number) {
    sum += number;
}

// Loop over the array, incrementing the sum variable

// numbers.forEach(function(number){
//     sum += number;
// })
numbers.forEach(adder);

// print the sum variable

console.log(sum);