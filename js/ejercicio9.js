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