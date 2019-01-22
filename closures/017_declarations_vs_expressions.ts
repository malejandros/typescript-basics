// function declaration
function fullName(first: string, last: string): string {
  return `${first} ${last}`;
}

// funtion expression *hoisting
var otherFullName: (first: string, last: string) => string;

otherFullName = function (first: string, last: string) {
  return `${first} ${last}`;
}

var thirdFullName: (first: string, last: string) => string = function fullName(first: string, last: string): string {
  return `${first} ${last}`;
}

console.log(fullName('Michael', 'Jordan'));
console.log(otherFullName('Michael', 'Jordan'));
console.log(thirdFullName('Michael', 'Jordan'));
