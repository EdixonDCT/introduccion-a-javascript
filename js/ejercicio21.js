const llamada = async () => {
    const data = await fetch("../json/ejercicio21.json");
    const respuesta = await data.json();
    return respuesta;
};

fetch("../json/ejercicio21.json")
  .then(async (data) => {
    const edades = await data.json();

    async function calcularEdades() {
      for (let x = 0; x < edades.length; x++) {
        try {
          await new Promise((resolve, reject) => {
            if (edades[x] < 18) {
              reject(new Error(`el usuario #${x+1} no tiene 18 años tiene ${edades[x]}`));
            } else {
              resolve();
            }
          });
        } catch (error) {
          alert(error);
        }
      }
    }
    calcularEdades();
})
