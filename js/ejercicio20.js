const llamada = async () => {
  const data = await fetch("../json/ejercicio20.json");
  const respuesta = await data.json();
  return respuesta;
};
fetch("../json/ejercicio20.json").then((data) => {
  data.json().then((valor) =>
  {
      async function procesado() {
        let promise = new Promise((resolve, reject) => {
          let x = 0;
          for (x; x < valor.length; x++) {
            setTimeout(() => resolve(console.log(valor[x].materias)), 1000 * (x + 1));
          }
        });
        if (x == valor.length)
        {
          let result = await promise;
        }
      }
      procesado();
  });
});
