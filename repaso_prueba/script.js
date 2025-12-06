// function bodega() {
//     let limiteProduc = parseInt(prompt("¿Que cantidad de productos desea ingresar? "));
//     let mayor50 = 0
//     let total = 0

//     let nameProduc;
//     let cantidad;
//     for (let i = 0; i <= limiteProduc; i++) {
//         nameProduc = prompt("Nombre del producto");
//         cantidad = parseInt(prompt(`¿Cuanto/as ${nameProduc} desea ingresar?`));
//         if (cantidad > 50) {
//             mayor50++


//         } else {
//             alert(``);
//         }
//     }

// }

let cantidadProductos = parseInt(prompt("¿Cuantos productos desea ingresar? "));
let productosMayor50 = 0;
let cantidadTotal = 0;
let nombre;
let cantidad;
let estadoTurno;
for (let i = 1; i <= cantidadProductos; i++) {
    nombre = prompt("¿Que producto desea ingresar?");
    cantidad = parseInt(prompt(`¿Cuantas unidades de ${nombre} desea ingresar? `));
    if (cantidad >= 50) {
        productosMayor50++
    }
    cantidadTotal += cantidad  
}
if (cantidadTotal >= 200 ) {
    estadoTurno = "Turno de alta carga";
} else {
    estadoTurno = "Turno normal";
}
console.log(`Total de unidades ingresadas: ${cantidadTotal}
    \nCantidad de productos con 50+ unidades: ${productosMayor50}
    \nCantidad total de producto ingresados: ${cantidadProductos}
    \nEstado de turno: ${estadoTurno}`)






