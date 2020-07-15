// let numbers = [10, 20, 30];

// let result = numbers.reduce(function(sum, number){
//     return sum + number;
// }, 10);

// console.log(result);

// ---------- ANOTHER EXAMPLE, MORE COMPLEX ---------

// let primaryColors = [
//     { color: 'red' },
//     { color: 'yellow' },
//     { color: 'blue' }
// ];

// let newArray = primaryColors.reduce(function(previous, primaryColors){
//     previous.push(primaryColors.color);

//     return previous;
// }, []);

// console.log(newArray);

// ------------- EXAMPLE WITH FUNCTION ---------------

function balancedParens(string) {
    return !string.split("").reduce(function(previous, char){
        if (previous < 0) { return previous; }
        if (char === "(") { return ++previous; }
        if (char === ")") { return --previous; }
        return previous;
    }, 0);
}

balancedParens("()");


// ------------ SEARCH NUMBERS REPEAT -------------

let num = [1, 1, 2, 3, 4, 4];

function unique(array) {
  return array.reduce((prev, num) => {
    if (!prev.find(el => el === num)) 
      prev.push(num);
    return prev;
  }, []);
}

unique(num);