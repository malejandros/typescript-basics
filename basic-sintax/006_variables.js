function printName(first, last) {
    var greeting = 'Hi there,';
    console.log(greeting, first, last);
    greeting = 'Hi there,';
    console.log(greeting, first, last);
}
// global variable
var fullName = 'Manuel Salinas';
// local variable
var paidAccount = true;
var versionNumber = 1.3;
fullName = "Any Hudgnens";
paidAccount = false;
// versionNumber = 1.4;
printName('Manuel', 'Salinas');
console.log(fullName);
console.log(paidAccount);
console.log(versionNumber);
// Diferences between let and var
var a = 3;
var b = 5;
if (a === 3) {
    var a_1 = 8;
    var b = 1;
    console.log('Dentro del if a=', a_1, 'b=', b);
}
console.log('Fuera del if a=', a, 'b=', b);
//# sourceMappingURL=006_variables.js.map