//create an object literal that contains: title, body, author, views, comments (author, body), isLive.
// let blogPost = {
//     title: 'a',
//     body: 'b',
//     author: 'c',
//     views: 10,
//     comment: [                      //array of objects
//         {author: 'a', body: 'b'},
//         {author: 'c', body: 'd'},
//     ],
//     isLive: true,
// } 

//Now create a constructor function that will create a blog post object. 

let blogPost = new BlogPost('a','b','c');
console.log(blogPost);

function BlogPost(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comment = [];
    this.isLive = false;
}

blogPost.views++;    //add a view.
console.log(blogPost);

