
function calcular() {
    // recuperar los valores de la página
    var operador1 = Number(document.getElementById("op1").value);
    var operador2 = Number(document.getElementById("op2").value);
    // sumarlos
    var solucion = operador1 + operador2;
    // agregarlos en la página en el lugar adecuado
    console.log(solucion);
    document.getElementById("resultado").innerHTML = solucion;
}