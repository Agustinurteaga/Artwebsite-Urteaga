/* Comprar retratos */
function updateMonto(monto) {
    let stringMonto = "Monto total: "
    let spanMonto = document.getElementById("displayMontoTotal")
        /*let monto = Number(spanMonto.textContent.replace(stringMonto, ""))
        monto = monto + Number(montoSumar)
        */
    spanMonto.textContent = (stringMonto + monto)
}

var elecciones = document.getElementsByClassName("checkboxProducto")
var precio = document.getElementsByClassName("precioProducto")

/* Guardar en un session storage para agregar 2 eventos[ agregar con click, restar destildando] */
/* a cada check, revisar el atributo, active. booleano/ dependiendo del valor. */

function updateCheckbox() {
    for (let i = 0; i < elecciones.length; i++) {
        elecciones[i].onclick = () => {
            let currentValue = elecciones[i].getAttribute("value")
            if (currentValue == "true") {
                elecciones[i].setAttribute("value", "false")
            } else {
                elecciones[i].setAttribute("value", "true")
            }
        }
    }
}
updateCheckbox()

/* Jquary  */

$("#displayJquary").click(function() {

    let totalPrice = 0
    for (i = 0; i < elecciones.length; i++) {
        let currentPrice = Number(precio[i].textContent)
        let currentValue = elecciones[i].getAttribute("value")
        if (currentValue == "true") {
            totalPrice = totalPrice + currentPrice
        }
    }
    updateMonto(totalPrice)

})