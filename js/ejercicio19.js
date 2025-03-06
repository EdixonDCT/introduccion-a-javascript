
const promesa1 = new Promise((resolve) => setTimeout(() => resolve("Aprobacion"), 2000));
const promesa2 = new Promise((resolve, reject) => setTimeout(() => reject("Rechazo"), 3000));
const promesa3 = new Promise((resolve, reject) => setTimeout(() => reject("Rechazo"), 1000));

const promesas = [promesa1, promesa2, promesa3]

Promise.allSettled(promesas).then((results) =>
{
  for (let x = 0; x < results.length; x++) {
    console.log(`${x + 1}.Promesa = ${results[x].status}`);
  }
}
);