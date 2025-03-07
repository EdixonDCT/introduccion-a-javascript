const persona = {
    nombre: "Juan",
    edad: 25
  };
  
  const handler = {
    set(obj, prop, value) {
      if (prop === "edad" && value < 0) {
        console.log("Error: La edad no puede ser negativa.");
        return false;
      }
      obj[prop] = value;
      console.log(obj);
      return true;
    }
  };
  
  const personaProxy = new Proxy(persona, handler);
personaProxy.edad = 30;
personaProxy.edad = -5;
  