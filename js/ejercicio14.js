let valor1, valor2, valor3;
let promise = new Promise(function(resolve, reject) {
    resolve(1);
});


promise.then(result => {
    setTimeout(() => valor1 = result * 1, 1000);});

promise.then(result => {
    setTimeout(() => valor2 = result * 2, 2000);});

promise.then(result => {
     setTimeout(() => valor3 = result * 3, 3000);});

setTimeout(() => alert(valor1 + valor2 + valor3), 4000);
