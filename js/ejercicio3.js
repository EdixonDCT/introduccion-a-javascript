const map = (callback,tamaño) => {
  let array = new Array;
  for (let x = 0; x < tamaño; x++)
  {
    array.push(callback())
  }
  for (let y = 0; y < array.length; y++)
  {
    console.log(array[y]);  
  }
};
setTimeout(() => {
  let tamaño = parseInt(prompt("Ingrese el tamaño del array"))
  map(() => (dato = prompt("Ingrese un valor")), tamaño);
}, 1000);

