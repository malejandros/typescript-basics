var dbQuery = function () {
    setTimeout(function () {
        console.log('Query result');
    }, 3000);
};
function loadPage(q) {
    console.log('Header');
    q();
    console.log('Navbar');
    console.log('Footer');
}
loadPage(dbQuery);
//# sourceMappingURL=028_higher_functions_callbacks.js.map