function profile(user) {
    return "Welcome " + user.firstName + " " + user.lastName;
}
var realUser = {
    email: 'test@test.com',
    firstName: 'Michael',
    lastName: 'Jordan'
};
var anotherUser = {
    email: 'test2@test.com',
    firstName: 'Allen',
    lastName: 'Iverson',
    age: 33
};
console.log(profile(realUser));
console.log(profile(anotherUser));
//# sourceMappingURL=023_introduction_interfaces.js.map