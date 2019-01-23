var dbQuery = function (): void {
  setTimeout(() => {
    console.log('Query result');
  }, 3000);
}

function loadPage(q: () => void) {
  console.log('Header');
  q();
  console.log('Navbar');
  console.log('Footer');
}

loadPage(dbQuery);