function printName(first: string, last: string) {
  let greeting: string = 'Hi there,';
  console.log(greeting, first, last);

  greeting = 'Hi there,';
  console.log(greeting, first, last);
}

// global variable
var fullName: string = 'Manuel Salinas';
// local variable
let paidAccount: boolean = true;
const versionNumber: number = 1.3;

fullName = "Any Hudgnens";
paidAccount = false;
// versionNumber = 1.4;

printName('Manuel', 'Salinas');

console.log(fullName);
console.log(paidAccount);
console.log(versionNumber);

// Diferences between let and var
var a: number = 3;
var b: number = 5;

if (a === 3) {
  let a: number = 8;
  var b: number = 1;

  console.log('Dentro del if a=', a, 'b=', b);
}

console.log('Fuera del if a=', a, 'b=', b);


