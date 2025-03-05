setTimeout(() => {
let i = 0;

setTimeout(() => alert(i), 100); //?
setTimeout(
  () =>
    alert(
      "Despues del bucle porque se ejecutara en 0.1 segundos y ya habra realizado el for entonces muestra 100000000"
    ),
  1000
);

// asumimos que el tiempo para ejecutar esta funcion es > 100 ms
for (let j = 0; j < 100000000; j++) {
  i++;
}
}, 1000);
// ¿Cuándo se ejecutará la función programada y por qué se ejecutará?
// a) Después del bucle.
// b) Antes del bucle.
// c) Al comienzo del bucle.
// ¿Qué va a mostrar alert()?
// RTA// a) Despues del bucle porque se ejecutara en 0.1 segundos y ya habra realizado el for entonces muestra 100000000