var x: number = 0;

while (x < 10) {
  console.log(x);
  x++;
}

let players: number[] = [1, 2, 3, 4, 5];
// for ... in
console.log('For in...')
for (let player in players) {
  console.log(player);
}

// for ... of
console.log('For of...');
for (let player of players) {
  console.log(player);
}
