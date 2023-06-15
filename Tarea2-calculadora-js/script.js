function calcular() {
  // recuperar los valores de la página
  const operacion = getElementById("operaciones");
  const operador1 = +getElementById("op1");
  const operador2 = +getElementById("op2");
  
  // sumarlos
  switch(operacion) {
    case "suma":
      resultado = operador1 + operador2;
      updateOperationResult(resultado);
      break;
    case "multiplicacion":
      resultado = operador1 * operador2;
      updateOperationResult(resultado);
  }
}

function getElementById(id) {
  return document.getElementById(id).value;
}

function updateOperationResult(resultado) {
  document.getElementById("resultado").innerHTML = resultado;
}
