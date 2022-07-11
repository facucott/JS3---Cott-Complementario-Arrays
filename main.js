//PRODUCTOS

class Producto {
    constructor(nombre, id, precio, stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.stock = stock;
    }

    vender(cantidad) {
        this.stock = this.stock - cantidad;
    } 
}

//CATEGORÍAS
const discos = [];
const tazas = [];
const remeras = [];
const calcos = [];
const posters = [];

//DISCOS
discos.push(new Producto("Vinilo", 1, 3500, 100));
discos.push(new Producto("CD", 2, 1200, 100));

//TAZA
tazas.push(new Producto("Taza", 3, 700, 100));

//REMERA
remeras.push(new Producto("Remera", 4, 2500, 100));

//CALCO
calcos.push(new Producto("Calco", 5, 100, 100));

//POSTERS
posters.push(new Producto("Poster (Juan, Facu, Gabo)", 6, 500, 100));
posters.push(new Producto("Poster Facu", 7, 500, 100));
posters.push(new Producto("Poster Gabo", 8, 500, 100));
posters.push(new Producto("Poster Juan", 9, 500, 100));


//ELEGIR PRODUCTOS
alert("Bienvenidos a la Tienda Online de 'The Three Of Quarantine'!" + "\n" +
                        "\n" + "Elija el producto que desea comprar:" +  "\n" +
                        "\n" + "(1) Vinilo 'Preacher, Sinner & Gambler' - $3.500" + 
                        "\n" + "(2) CD 'Preacher, Sinner & Gambler'- $1.200" + 
                        "\n" + "(3) Taza Suitcase - $700" + 
                        "\n" + "(4) Remera 'Preacher, Sinner & Gambler' - $2.500" +
                        "\n" + "(5) Calco Suitcase - $2.500" +
                        "\n" + "(6) Poster (Juan, Gabo, Facu) - $500" +
                        "\n" + "(7) (Poster Facu) - $500" +
                        "\n" + "(8) (Poster Gabo) - $500" +
                        "\n" + "(9) (Poster Juan) - $500" );

//PRECIO COMPRA
function calcularPrecio(precioProducto, cantidadProducto) {
    return (precioProducto * cantidadProducto);
}

//SELECCIÓN DE PRODUCTO
let productoSeleccionado = parseInt(prompt("Ingrese el número del producto que desea comprar:"));
const discoBuscado = discos.find(disco => disco.id === productoSeleccionado);
const tazaBuscada = tazas.find(taza => taza.id === productoSeleccionado);
const remeraBuscada = remeras.find(remera => remera.id === productoSeleccionado);
const calcoBuscado = calcos.find(calco => calco.id === productoSeleccionado);
const posterBuscado = posters.find(poster => poster.id === productoSeleccionado);

//CANTIDAD
let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que quiere comprar:"));

//PRECIO TOTAL

if (cantidad <= 100) {

    if (productoSeleccionado <= 0 || productoSeleccionado >=10) {
        alert("Ingrese un número válido");
    } else if (productoSeleccionado <= 2) {
        console.log("El precio final es de $" + calcularPrecio(discoBuscado.precio, cantidad));
        alert("¡Gracias por su compra!")
        discoBuscado.vender(cantidad);
    } else if (productoSeleccionado <= 3) {
        console.log("El precio final es de $" + calcularPrecio(tazaBuscada.precio, cantidad));
        alert("¡Gracias por su compra!")
        tazaBuscada.vender(cantidad);
    } else if (productoSeleccionado <= 4) {
        console.log("El precio final es de $" + calcularPrecio(remeraBuscada.precio, cantidad));
        alert("¡Gracias por su compra!")
        remeraBuscada.vender(cantidad);
    } else if (productoSeleccionado <= 5) {
        console.log("El precio final es de $" + calcularPrecio(calcoBuscado.precio, cantidad));
        alert("¡Gracias por su compra!")
        calcoBuscado.vender(cantidad);
    } else if (productoSeleccionado <= 9) {
        console.log("El precio final es de $" + calcularPrecio(posterBuscado.precio, cantidad));
        alert("¡Gracias por su compra!")
        posterBuscado.vender(cantidad);
    } else {
        alert("El que ha ingresado no es un número válido");
    }

} else if (cantidad > 100) {
    alert("Te pedimos disculpas, no hay stock suficiente.")
}