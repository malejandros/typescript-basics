interface User {
  email: string,
  firstName: string,
  lastName: string,
  age?: number
}

function profile(user: User) {
  return `Welcome ${user.firstName} ${user.lastName}`;
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
}

console.log(profile(realUser));
console.log(profile(anotherUser));