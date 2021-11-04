/*Problema de clase                      */


function setTemperatura(temperatura) {
    console.log(temperatura)
    document.getElementById("temperatura").textContent = temperatura


}
/*Solucion al problema */

$.ajax({
    async: false,
    type: 'GET',
    url: "https://api.openweathermap.org/data/2.5/weather?q=argentina&appid=23c67c436fa058e536ea6cabbcc58cf0&units=metric",
    success: function(data) {
        let temperatura = data.main.temp;
        setTemperatura(temperatura)
    }
});

/*Ejemplo de clase                      */

const url = 'http://hp-api.herokuapp.com/api/characters'

$("#busqueda").prepend('<button id="btn">Mostrar</button>')

$('#btn').click(() => {

    $.get(url, (respuesta, estado) => {
        if (estado == "success") {
            for (let i = 0; i < respuesta.length; i++) {
                /*Aca tengo que editar y buscar artist y gene*/
                if (respuesta[i].house == "Gryffindor") {
                    /*Aca tengo que editar y buscar artist y gene*/
                    console.log(respuesta[i].name + " " + respuesta[i].house)
                        /*Aca tengo que editar y buscar artist y gene*/
                    $("#respuesta").prepend(`<img src="${respuesta[i].image}">
                <p>Nombre ${respuesta[i].name} </p>
                <p>Casa ${respuesta[i].house}</p>`)
                }
            }
        }
    })
})

/*Testeo                      */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);