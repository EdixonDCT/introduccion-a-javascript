const llamada = async () => {
  const data = await fetch("../json/ejercicio20.json");
  const respuesta = await data.json();
  return respuesta;
};

fetch("../json/ejercicio20.json").then(async (data) => {
  const valor = await data.json();

  async function procesado() {
    for (let x = 0; x < valor.length; x++) {
      await new Promise((resolve) => setTimeout(resolve, 1000 * (x + 1)));
      console.log(valor[x].materias);
    }
  }

  procesado();
});
