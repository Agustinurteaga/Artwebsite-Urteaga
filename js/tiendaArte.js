/* Comprar retratos */
function updateMonto(montoSumar) {
    let stringMonto = "Monto total: "
    let spanMonto = document.getElementById("displayMontoTotal")
    let monto = Number(spanMonto.textContent.replace(stringMonto, ""))
    monto = monto + Number(montoSumar)
    spanMonto.textContent = (stringMonto + monto)
}


var elecciones = document.getElementsByClassName("checkboxProducto")
var precio = document.getElementsByClassName("precioProducto")


/* restar monto con jquarry */
/* Guardar en un session storage para agregar 2 eventos[ agregar con click, restar destildando] */


for (i = 0; i < elecciones.length; i++) {
    let currentPrice = precio[i].textContent
    elecciones[i].onclick = () => {

        updateMonto(currentPrice)
    }

}

/* envio */

var radio1 = document.getElementById("Radio1")
radio1.onclick = () => {

}

var radio2 = document.getElementById("Radio2")
radio2.onclick = () => {


}