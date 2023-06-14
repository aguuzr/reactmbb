
function calcular() {
    // recuperar los valores de la página
    var operacion = document.getElementById("operaciones").value;
    var operador1 = Number(document.getElementById("op1").value);
    var operador2 = Number(document.getElementById("op2").value);
    // sumarlos
    if(operacion==="suma") {
        document.getElementById("resultado").innerHTML = operador1 + operador2;
    } else {
        document.getElementById("resultado").innerHTML = operador1 * operador2;
    }    
}