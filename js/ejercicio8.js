const find = (callback, condicional) => {
  let valorIf = condicional();
  let array = callback();
  let arrayFind = new Array();
  for (let x = 0; x < array.length; x++) {
    if (array[x] == valorIf) {
      arrayFind.push(x);
      x = array.length;
    }
  }
  arrayFind.length >= 1 ? alert(`True Posicion:[${arrayFind[0]}]`) : alert("Undefined");
};
setTimeout(() => {
  const condicional = () => {
    condicion = parseInt(prompt("Ingrese la condicion"));
    return condicion;
  };
  const numbers = () => {
    let tamaño = parseInt(
      prompt(
        "Ingrese tamaño donde \nlos numeros seran comparados con la condicion\nsera un numero que usted ponga"
      )
    );
    let numeros = new Array(tamaño);
    for (let x = 0; x < numeros.length; x++) {
      numeros[x] = parseInt(prompt(`Ingrese el numero #${x + 1}`));
    }
    return numeros;
  };
  find(
    () => numbers(),
    () => condicional()
  );
}, 3000);
