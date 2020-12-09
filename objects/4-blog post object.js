//create an object literal that contains: title, body, author, views, comments (author, body), isLive.
let blogPost = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comment: [                      //array of objects
        {author: 'a', body: 'b'},
        {author: 'c', body: 'd'},
    ],
    isLive: true,
} 

console.log(blogPost);

