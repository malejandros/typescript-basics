// function declaration
function fullName(first, last) {
    return first + " " + last;
}
// funtion expression
var otherFullName;
otherFullName = function (first, last) {
    return first + " " + last;
};
var thirdFullName = function fullName(first, last) {
    return first + " " + last;
};
console.log(fullName('Michael', 'Jordan'));
console.log(otherFullName('Michael', 'Jordan'));
console.log(thirdFullName('Michael', 'Jordan'));
//# sourceMappingURL=017_declarations_vs_expressions.js.map