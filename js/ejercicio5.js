const every = (callback) => {
  let array = callback();
  let arrayEvery = new Array();
  let arrayNega = new Array();
  for (let x = 0; x < array.length; x++) {
    if (array[x] > 0) arrayEvery.push(array[x]);
    if (array[x] <= 0) arrayNega.push(array[x]);
  }
  arrayEvery.length == array.length ? alert("VERDADERO") : alert(`FALSO: hay la cantidad de ${arrayNega.length} Negativos`);
};
setTimeout(() => {
  const numbers = () => {
    let tamaño = parseInt(
      prompt(
        "Ingrese TAMAÑO donde \ningresara numeros positivos y negativos \ncomprobaremos que todos sean positivos"
      )
    );
    let numeros = new Array(tamaño);
    for (let x = 0; x < numeros.length; x++) {
      numeros[x] = parseInt(prompt(`Ingrese el numero #${x + 1}`));
    }
    return numeros;
  };
  every(() => numbers());
}, 3000);
