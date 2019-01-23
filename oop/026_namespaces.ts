interface IPost {
  title: string,
  body: string
}

class Post implements IPost {
  title: string;
  body: string;

  constructor(post: IPost) {
    this.title = post.title;
    this.body = post.body;
  }

  printPost() {
    console.log(this.title);
    console.log(this.body);
  }
}

var myPost = new Post({
  title: 'Hi',
  body: 'Hi everyone'
});

myPost.printPost();