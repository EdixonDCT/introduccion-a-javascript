const some = (callback) => {
  let array = callback();
  let arraySome = new Array();
  for (let x = 0; x < array.length; x++) {
    if (array[x] >= 100) arraySome.push(array[x]);
  }
  arraySome.length >= 1 ? alert("VERDADERO") : alert(`FALSO`);
};
setTimeout(() => {
  const numbers = () => {
    let tamaño = parseInt(
      prompt(
        "Ingrese TAMAÑO donde \nlos numeros sean mayor o igual al 100"
      )
    );
    let numeros = new Array(tamaño);
    for (let x = 0; x < numeros.length; x++) {
      numeros[x] = parseInt(prompt(`Ingrese el numero #${x + 1}`));
    }
    return numeros;
  };
  some(() => numbers());
}, 3000);
