let products = [
    { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
    { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
    { name: 'celery', type: 'vegetable', quantity: 30, price: 9 },
    { name: 'orange', type: 'fruit', quantity: 3, price: 5 }
];

// --------------- WITH NORMAL FOR ----------------------

// let filteredProducts = [];

// for (let i = 0; i < products.length; i++) {
//     if(products[i].type === 'fruit') {
//         filteredProducts.push(products[i]);
//     }
// }

// --------------- WITH ES6 -----------------

// let filteredProducts = products.filter(function(product){
//     return product.type === 'vegetable';
// });

// ----- ANOTHER EXAMPLE WITH MORE FILTERS -----

// let filteredProducts = products.filter(function(product){
//     return product.type === 'vegetable'
//         && product.quantity > 0
//         && product.price < 10
// });

// console.log(filteredProducts);

// -------------- EXAMPLE WITH ID BETWEEN ARRAYS --------------

let post = { id: 4, title: 'New Post' };

let comments = [
    { postId: 4, content: 'awesome post' },
    { postId: 3, content: 'awesome post' },
    { postId: 4, content: 'neat' }
];

function commentsForPost(post, comments) {
    return comments.filter(function(comment){
        return comment.postId === post.id;
    });
}

commentsForPost(post, comments);