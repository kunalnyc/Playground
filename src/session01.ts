
let myName: string;
let myAge: number;
let isLoading: boolean;
let album: string | number;

myName = 'Ancilia'
myName = 'Kunal'
myAge = 22
isLoading = true
album = 'Sunset' //album can be num and integer becoz the valued typed is both int and string also it can't be boolean because 
//the value typed is not boolean
album = 1989 //album can be num and integer becoz the valued typed is both int and string

const sum = (a: number, b: string) => {

    return a + b;

}

let postId: string | number;
let isActive: number | boolean;

//Regular expressions
let re: RegExp = /\w+/g;