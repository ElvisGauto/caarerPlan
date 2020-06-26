// ------------- EX 1 ---------------

function product(...numbers) {
    return numbers.reduce(function(acc, number) {
        return acc * number;
    }, 1)
}

product(1,2,3,4,5);

// ------------- EX 2 ---------------

function join(array1, array2) {
    return [...array1, ...array2];
}

join([1,2,3,4], [3,2,1,3]);

// ------------- EX 3 ---------------

const unshift = (array, ...items) => [ ...items, ...array ];