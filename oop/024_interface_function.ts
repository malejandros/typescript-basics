interface InvoiceFunc {
  (name: string, total: number): void;
}

let myInvoice: InvoiceFunc;
myInvoice = (n, t) => {
  console.log(n);
  console.log(t);
}

myInvoice('Google', 200);