console.log('-check-point-0');

promise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve('success');
  }, 10000);
});

promise.then((result) => console.log(result));


console.log('-check-point-1');

