const ciudades = async () => {
    const data = await fetch('../json/ejercicio15.json')
    const respuesta = await data.json()
    return respuesta;
}

ciudades().then((data) =>
    {
        console.log(data);
    })

fetch('../json/ejercicio15.json').then((data) => {
    data.json().then((ciudades) => {
        console.log(ciudades);

    })
})