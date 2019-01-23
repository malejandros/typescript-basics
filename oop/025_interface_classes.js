var Admin = /** @class */ (function () {
    function Admin(email) {
        this.email = email;
        this.role = 'Admin';
    }
    return Admin;
}());
function profile(user) {
    return "Welcome " + user.email;
}
var joe = new Admin('joe@domain.com');
console.log(joe.role);
var Post = /** @class */ (function () {
    function Post(post) {
        this.title = post.title;
        this.body = post.body;
    }
    Post.prototype.printPost = function () {
        console.log(this.title);
        console.log(this.body);
    };
    return Post;
}());
var myPost = new Post({
    title: 'Hi',
    body: 'Hi everyone'
});
myPost.printPost();
//# sourceMappingURL=025_interface_classes.js.map