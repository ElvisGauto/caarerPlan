var name = 'Mauricio'; // variable define in global scope

function log() {
    let name = 'Alejandro'; // variable define in local scope
    alert('Hello ' + name + '. How are you?');
}

function log2() {
    let name = "Pancho";
    alert('Hi ' + this.name + '. How old are you?');
}