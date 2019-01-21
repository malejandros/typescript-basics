function printAddress(street: string, streetTwo?: string) {
  console.log(street);
  if (streetTwo) {
    console.log(streetTwo);
  }
}


// default arguments
function printFullAddress(street: string, streetTwo?: string, state = 'AZ') {
  console.log(street);
  if (streetTwo) {
    console.log(streetTwo);
  }
  console.log(state);
}

// rest arguments
function lineupCard(team: string, ...players: string[]) {
  console.log(`Team: ${team}`);
  for (let player of players) {
    console.log(player);
  }
}

printAddress('123 Any st');
printAddress('123 Any st', 'Test Avenue');


console.log('Full address:');
printFullAddress('123 Any st');
printFullAddress('123 Any st', 'Test Avenue');
printFullAddress('123 Any st', 'Test Avenue', 'Idaho');

lineupCard('Astros', 'Altuve', 'Correra', 'Bregman');