const filter = (callback) =>
{
  let array = callback();
  let arrayFilter = new Array;
  for (let x = 0; x < array.length; x++)
  {
    if (array[x] >= 18)
    {
      arrayFilter.push(array[x])  
    }  
  }
  arrayFilter.forEach(element => {
    console.log(element); 
  });
};
setTimeout(() => {
  const edad = () =>
    {
    let tamaño = parseInt(
      prompt("Ingrese la cantidad de edades para realizar un array")
    );
    let edades = new Array(tamaño);
    for (let x = 0; x < edades.length; x++) {
      edades[x] = parseInt(prompt(`Ingrese la edad #${x + 1}`));
    }
    return edades;
  }
  filter(() => (edad()));
}, 3000);
