const filtrar = async () => {
  const data = await fetch("../json/ejercicio16.json");
  const respuesta = await data.json();
  return respuesta;
};

fetch("../json/ejercicio16.json").then((data) => {
  data.json().then((valor) => {
    for (let x = 0; x < valor.length; x++) {
      if (valor[x].id[0] === "A") {
        console.log(valor[x]);
      }
    }
  });
});
