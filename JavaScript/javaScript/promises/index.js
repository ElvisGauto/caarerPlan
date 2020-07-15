
promise = new Promise((resolved, reject) => {
    reject();
    let request = new XMLHttpRequest;
    request.onload = () => {
        resolved();
    };

});

promise
    .then(() => console.log('this process is successful!!'))
    .catch(() => console.log('we have a error!!'));