const saludo = async (nombre) => {
  let hola = await new Promise((a, b) => {
    setTimeout(() => {
      a(nombre);
    }, 8000);
  });
  setTimeout(() => {
    console.log("esperar");
  }, 200);
  console.log(hola);
  console.log("¿Que paso?");
  return hola;
}
saludo("Lol").then((hola) => {
  console.log(hola);
});
