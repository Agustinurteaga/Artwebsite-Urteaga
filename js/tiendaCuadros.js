/* Comprar Cuadros */

class Cuadro {
    constructor(idCuadro, precio) {
        this.idCuadro = nombre;
        this.precio = precio;
    }
    getName() {
        return this.idCuadro;
    }
    getPrice() {
        return this.precio;
    }
}


/* Obras tratadas independiemente  */


const cuadro1 = { id: 1, obra: "Romina Ger #1 - 2019", precioObra: 3200 };
const cuadro2 = { id: 2, obra: "Romina Ger #2 - 2017", precioObra: 3200 };
const cuadro3 = { id: 3, obra: "Romina Ger #3 - 2019", precioObra: 3200 };
const cuadro4 = { id: 4, obra: "Romina Ger #4 - 2021", precioObra: 1200 };
const cuadro5 = { id: 5, obra: "Romina Ger #5 - 2019", precioObra: 1000 };
const cuadro6 = { id: 6, obra: "Romina Ger #6 - 2019", precioObra: 3200 };
const cuadro7 = { id: 7, obra: "Romina Ger #7 - 2019", precioObra: 1000 };
const cuadro8 = { id: 8, obra: "Romina Ger #8 - 2019", precioObra: 1000 };
const cuadro9 = { id: 9, obra: "CRomina Ger #9 - 2018", precioObra: 3200 };
const cuadro10 = { id: 9, obra: "Romina Ger #10 - 2019", precioObra: 1000 };

/*  visible e invisible */

$(".eventoFade").on("click", () => {
    $(".eventoCard").fadeOut(1000);

})