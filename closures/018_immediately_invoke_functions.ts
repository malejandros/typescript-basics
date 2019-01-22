var names: string[] = ['Michael', 'Allen', 'Manu'];
var counter: number = 0;

(function () {
  for (let name in names) {
    counter++;
  }
})();

console.log(counter);