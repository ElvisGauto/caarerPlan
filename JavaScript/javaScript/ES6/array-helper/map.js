let numbers = [1, 2 ,3];
// let dobleNumbers = [];

let doubled = numbers.map(function(number) {
    return number * 2;
})

// for (let i = 0; i < number.length; i++) {
//     dobleNumbers.push(number[i] * 2);
// }

// console.log(doubled);
// console.log(dobleNumbers);


// ---------------------------- ANOTHER EXAMPLE -------------------------------

let cars = [
    { model: 'Buick', price: 'CHEAP' },
    { model: 'Camaro', price: 'EXPENSIVE' }
];

let prices = cars.map(function(car) {
    return car.price;
});

console.log(prices);