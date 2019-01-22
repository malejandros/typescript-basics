// function expression
var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Michael', 'Jordan'));
// immediately invoked functions
(function (first, last) {
    console.log(first + " " + last);
})('Allen', 'Iverson');
//# sourceMappingURL=018_immediately_invoke_functions_arguments.js.map