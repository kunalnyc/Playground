let stringUsernames = ['olivia', 'emma', 'emily', 'sophia'];
let Ids = [1, 2, 'olivia', 4, 'emma'];
let mixedData = ['olivia', 1, 'emma', 2, 'emily', 3, 'sophia', 4, true];
stringUsernames[0] = 'Ancilia';
stringUsernames.push('Kunal');
Ids[0] = 19;
Ids.unshift('Rockstar');
Ids = stringUsernames;
let emptyArray = [];
let clubs = [];
clubs.push('Manchester United');
//tuples
let tupele = ['Ancilia', 22, true];
let mixed = ['Ancilia', 22, true, 'Kunal', 23, false];
tupele[2] = false;
//objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = {};
myObj = mixed;
const user = {
    userID: 1,
    username: 'Ancilia',
    isActive: true
};
if (user.userID == 2)
    user.isActive = false;
console.log(user.username);
console.log(user.userID);
console.log(user.isActive);
export {};
//# sourceMappingURL=session02.js.map