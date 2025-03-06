let promise = new Promise((resolve, reject) => 
{
    setTimeout(() => reject(new Error("Promise rechazada.")), 1000);
  }); 

promise.catch(alert);