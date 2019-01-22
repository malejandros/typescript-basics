// functions have access to any public variables in the outer scope

// function nameFunction(name: string): void {
//   var n: string = name;

//   function printName() {
//     console.log(n);
//   }

//   printName();
// }

// nameFunction('Manuel');

// ******

// The inner functions maintain acces to the outer scope even AFTER the values are returned
// function nameFunction(name: string) {
//   var n: string = name;

//   return function () {
//     console.log(n);
//   }
// }

// var otherFunction = nameFunction('Michael');
// otherFunction();


// ******

function lineup() {
  var nowBatting: number = 1;

  return {
    nextBatter() { nowBatting++ },
    currentBatter() { return nowBatting }
  }
}

let batters = lineup();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());

let pitchers = lineup();
console.log(pitchers.currentBatter());