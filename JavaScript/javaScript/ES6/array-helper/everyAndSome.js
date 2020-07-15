// let names = [
//     "Alexandria",
//     "Matthew",
//     "Joe"
// ];

// let everyName = names.every(function(name){
//     return name.length > 4;
// });

// let someName = names.some(function(name){
//     return name.length > 4;
// });

// console.log('Every: '+everyName);

// console.log('Some: '+someName);

// ------------- ANOTHER EXAMPLE MORE COMPLEX --------------------

function Field(value) {
    this.value = value;
}

Field.prototype.validate = function() {
    return this.value.length > 0;
}

let username = new Field("2cool");
let password = new Field("my_password");
let birthdate = new Field("10/10/2010¿");

let fields = [username, password, birthdate];

let formIsValid = fields.every(function(field){
    return field.validate();
});

if(formIsValid) {
    console.log("You are logger");
} else {
    console.log('Error');
}