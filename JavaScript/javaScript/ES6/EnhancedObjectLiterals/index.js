// ------------ EX 1 -------------

const fields = [
    'firstName', 
    'lastName', 
    'phoneNumber'
];
      
const props = { fields };

// ------------ EX 2 -------------

const canvasDimensions = function(width, initialHeight) {
    const height = initialHeight * 9 /16;
    return { 
    width, 
    height 
    };
};

// ------------ EX 3 -------------

const color = 'red';

const Car = {
  color: color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};