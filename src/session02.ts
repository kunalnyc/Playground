
let stringUsernames = ['olivia', 'emma', 'emily', 'sophia']
let Ids = [1, 2, 'olivia', 4, 'emma']
let mixedData = ['olivia', 1, 'emma', 2, 'emily', 3, 'sophia', 4, true]

stringUsernames[0] = 'Ancilia'
stringUsernames.push('Kunal')

Ids[0] = 19;
Ids.unshift('Rockstar');

Ids = stringUsernames;

let emptyArray = [];
let clubs: string[] = [];

clubs.push('Manchester United');

//tuples
let tupele: [string, number, boolean] = ['Ancilia', 22, true]

let mixed = ['Ancilia', 22, true, 'Kunal', 23, false]

tupele[2] = false

//objects
let myObj: object

myObj = []

console.log(typeof myObj)