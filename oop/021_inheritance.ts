class Report {
  companyProfile: string;

  constructor(name: string) {
    this.companyProfile = name;
  }
}

class Invoice extends Report {
  constructor(public name: string, public total: number) { super(name); }

  printInvoice() {
    return this.name + ',' + this.total;
  }
}

class BillOfLading extends Report {
  constructor(public name: string, public city: string, public state: string) { super(name); }

  printBol() {
    return this.name + ',' + this.city + ',' + this.state;
  }
}

var invoice = new Invoice('Google', 200);
console.log(invoice.companyProfile);
console.log(invoice.printInvoice());

var bol = new BillOfLading('Google', 'Scottsdae', 'AZ');
console.log(bol.printBol());