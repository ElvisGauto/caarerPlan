// ----------- E.G 1 -----------

const testingTeam = {
    lead: 'Pancho',
    manager: 'Villa',
    engineer: 'Capece',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineer;
    }
}

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam;
    }
}

const names = [];

for(let name of engineeringTeam) {
    names.push(name);
}

console.log(names);