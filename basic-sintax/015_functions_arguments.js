function printAddress(street, streetTwo) {
    console.log(street);
    if (streetTwo) {
        console.log(streetTwo);
    }
}
// default arguments
function printFullAddress(street, streetTwo, state) {
    if (state === void 0) { state = 'AZ'; }
    console.log(street);
    if (streetTwo) {
        console.log(streetTwo);
    }
    console.log(state);
}
function lineupCard(team) {
    var players = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        players[_i - 1] = arguments[_i];
    }
    console.log("Team: " + team);
    for (var _a = 0, players_1 = players; _a < players_1.length; _a++) {
        var player = players_1[_a];
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
//# sourceMappingURL=015_functions_arguments.js.map