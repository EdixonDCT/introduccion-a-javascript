const reglas = {
    numero: (valor) => !isNaN(valor),
    alfanumerico: (valor) => /^[a-zA-Z]+$/.test(valor),
    email: (valor) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor),
    date: (valor) => !isNaN(Date.parse(valor))
  };
  
  const handler = {
    set(obj, prop, value) {
      if (typeof value === "string") value = value.trim(); // Eliminar espacios extras
  
      // Determinar qué tipo de validación aplicar según el nombre de la propiedad
      let tipo = "";
      if (prop.includes("edad") || prop.includes("cantidad")) tipo = "numero";
      else if (prop.includes("nombre") || prop.includes("apellido")) tipo = "alfanumerico";
      else if (prop.includes("correo") || prop.includes("email")) tipo = "email";
      else if (prop.includes("fecha")) tipo = "date";
  
      // Aplicar validación si hay una regla definida
      if (tipo && !reglas[tipo](value)) {
        console.log(`Error: '${value}' no es válido para '${prop}' (se esperaba tipo: ${tipo}).`);
        return false; // No se asigna el valor
      }
      console.log(`✅ Correcto: '${value}' ha sido ingresado en '${prop}'.`);
      return true; // No se asigna el valor, solo se muestra el log
    }
  };

  const proxyValidacion = new Proxy(reglas, handler);

  proxyValidacion.edad = 25;
  proxyValidacion.edad = "abc";
  proxyValidacion.nombre = "Juan";
  proxyValidacion.nombre = "123";
  proxyValidacion.correo = "test@mail.com";
  proxyValidacion.correo = "test@mail";
  proxyValidacion.fechaNacimiento = "2023-05-10";
  proxyValidacion.fechaNacimiento = "hoy";
  