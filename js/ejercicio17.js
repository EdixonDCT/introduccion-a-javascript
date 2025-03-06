const filtrar = async () => {
  const data = await fetch("../json/ejercicio17.json");
  const respuesta = await data.json();
  return respuesta;
};

fetch("../json/ejercicio17.json").then((data) => {
  data.json().then((valor) =>
  {
    for (let x = 0; x < valor.length; x++)
    {
      console.log(
        `Usuario: ${valor[x].nombre} con ${valor[x].edad} y vive en ${valor[x].ciudad}`
      );
    }
  });
});
