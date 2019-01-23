class Invoice {
  total: number;

  constructor(total: number) {
    this.total = total;
  }

  printTotal() {
    console.log(this.total);
  }

  // nested function
  // printLater(time: number) {
  //   setTimeout(function () {
  //     console.log(this.total);
  //   }, time);
  // }

  printLater(time: number) {
    setTimeout(() => {
      console.log(this.total);
    }, time);
  }
}

var invoice = new Invoice(3);
invoice.printTotal();
invoice.printLater(1000);