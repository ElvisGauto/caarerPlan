// -------------- Funcionality for Resolved and Reject -----------------

// promise = new Promise((resolved, reject) => {
    // reject();
//     let request = new XMLHttpRequest;
//     request.onload = () => {
//         resolved();
//     };

// });

// promise
//     .then(() => console.log('Finally finished!'))
//     .then(() => console.log('i was also ran!!'))
//     .catch(() => console.log('uh oh!!'));

// ----------- GET DATA WITH FETCH ------------------

// url = "https://jsonplaceholder.typicode.com/posts/";

// fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data));

// ------------ GET DATA WITH FETCH HAVING AN ERROR ------------------

url = "https://jsonplaceholder.typicode.com/posts123213/";

fetch(url)
    .then(response => console.log(response))
    .catch(error => console.log('BAD', error));


