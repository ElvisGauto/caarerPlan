// -------------- EX 1 -----------------

class Monster {
    constructor(options) {
        this.health = 100;
        this.name = options.name;
    }
}

const monster = new Monster({health, name: 'Selena'})

monster;

// -------------- EX 1 -----------------

class Monster {
    constructor(options) {
        this.health = 100;
        this.name = options.name;
    }
}
   
class Snake extends Monster {
    constructor(option){
        super(option)       
    }
   
    bite(data){data.health-=10;}
}
  
const snake = new Snake({health, name: 'panchj'});