var x = 0;
while (x < 10) {
    console.log(x);
    x++;
}
var players = [1, 2, 3, 4, 5];
// for ... in
console.log('For in...');
for (var player in players) {
    console.log(player);
}
// for ... of
console.log('For of...');
for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
    var player = players_1[_i];
    console.log(player);
}
//# sourceMappingURL=014_loops.js.map