const reglas = {
    numero: (valor) => !isNaN(valor),
    alfanumerico: (valor) => /^[a-zA-Z]+$/.test(valor),
    email: (valor) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor),
    date: (valor) => !isNaN(Date.parse(valor))
  };
  
  const handler = {
    set(obj, prop, value) {
      if (typeof value === "string") value = value.trim(); //El valor trim elimina los espacios
  
      //el prop.incluye lee el nombre del llamado del proxy
      let tipo = "";
      if (prop.includes("edad")) tipo = "numero";
      else if (prop.includes("nombre")) tipo = "alfanumerico";
      else if (prop.includes("correo")) tipo = "email";
      else if (prop.includes("fecha")) tipo = "date";
  
      // Aplicar validación si hay una regla definida
      if (tipo && !reglas[tipo](value)) {
        console.log(`Error: '${value}' no es válido para '${prop}' (se esperaba tipo: ${tipo}).`);
        return false; // No se asigna el valor
      }
      console.log(`Correcto: '${value}' ha sido ingresado en '${prop}'.`);
      return true; // No se asigna el valor, solo se muestra el log
    }
  };

  const proxyValidacion = new Proxy(reglas, handler);

  proxyValidacion.edad = 25;
  proxyValidacion.edad = "abc";
  proxyValidacion.nombre = "Edixon";
  proxyValidacion.nombre = "123";
  proxyValidacion.correo = "edixondelta2022@mail.com";
  proxyValidacion.correo = "test@mail";
  proxyValidacion.fechaNacimiento = "2023-05-10";
  proxyValidacion.fechaNacimiento = "hoy";
  