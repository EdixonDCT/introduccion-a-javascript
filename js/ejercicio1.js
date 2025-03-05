// const contar = (inicio, fin) => { 
//     let cont = 0;
//     for (let i = inicio; i <= fin; i++) {
//     cont++;
//     setTimeout(() => {
//     console.log(i);
//     }, 3000 * cont);
// }
// }; //No sirve porque debe ser anidado(Segun el ejercicio)

// const contar = (inicio, fin, cont) => {
//     if (inicio <= fin) {
//         console.log(inicio);
//         inicio++;
//         cont++;
//         setTimeout(() => contar(inicio, fin, cont), 3000 * cont);
//         //el error anterior era porque al poner solo contar 
//         //con los argumentos se declara todo de una vez y se ejecuta los segundos despues
//         //si se pone como arrow function
//         //se ejecutará despues del tiempo indicado.
//     }
// }
// setTimeout(() => {
//     let desde = parseInt(prompt("Ingrese el número desde que quieres que empiece"));
//     let hasta = parseInt(prompt("Ingrese el número donde quieres que termine"));
//     let cont = 1; // Se inicia en 1 para que el primer número tenga 3s de espera
//     contar(desde, hasta, cont);
// }, 1000);

function TimeoutContar(inicio, fin) {
    let i = inicio;

    function imprimirNumero() {
        if (i <= fin) {
            console.log(i);
            i++; 
            setTimeout(imprimirNumero, 3000);
            //aca se toma el tiempo en cuenta porque no se coloca parentesis
        }
    }
    imprimirNumero(); // Inicia el proceso
}
const IntervalContar = (inicio, fin) => {
    let cont = inicio;
    const intervalo = setInterval(() => {
        console.log(cont);
        cont++;
        if (cont > fin) {
            clearInterval(intervalo); // Detener el intervalo cuando llegue al final
        }
    }, 3000); // Cada 3 segundos
};
setTimeout(() => {
    let desde = parseInt(prompt("Ingrese el número desde que quieres que empiece"));
    let hasta = parseInt(prompt("Ingrese el número donde quieres que termine"));
    let pregunta = parseInt(prompt("Ingrese si desea realizarlo con \n1.setInterval\n2.setTimeout"));
    switch (pregunta) {
        case 1:
            TimeoutContar(desde, hasta);
            break;
        case 2:
            IntervalContar(desde, hasta)
            break;
        default:
            alert("mal ingreso CODIGO ACABADO")
            break;
    }
}, 1000);