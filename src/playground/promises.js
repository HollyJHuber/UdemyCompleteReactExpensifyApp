const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve('this data is resolved');
    reject('something went horribly wrong');
  }, 1500);
}); 
console.log('before');

promise.then((data) => {
  console.log(data);
}), (error) => {
  console.log('error:', error);
});

console.log('after');