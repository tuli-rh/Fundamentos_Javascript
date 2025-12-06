/*
Desarrolle un programa en JavaScript que solicite la cantidad total de estudiantes evaluados. 
Esta cantidad será el límite del bucle.
Luego, utilice un bucle para ingresar la calificación de cada estudiante, 
donde cada calificación debe estar entre 1.0 y 7.0 (no se permiten valores menores a 1 ni mayores a 7).
El programa debe calcular:
La cantidad total de estudiantes ingresados.
El promedio general de las calificaciones.
La cantidad de estudiantes que obtuvieron una calificación superior a 6.0, 
los cuales deben ser considerados como “Alto rendimiento”.
El programa no debe solicitar nombres de estudiantes y todas las variables deben estar en español.
El código debe funcionar sin errores.
*/

let cantidadEstudiates = prompt("¿Cuantos estudiantes seran calificados?:");
let calificacionSuperior = 0;
let promedio = 0;
let calificacion;
for (let i = 1; i <= cantidadEstudiates; i++) {
    calificacion = parseInt(prompt("Ingrese la calificaion del estudiante: "));
    if (calificacion >= 60) {
        calificacionSuperior++
    }
    if (calificacion > 70 && calificacion < 10) {
        alert("Nota no valida");
    } else {
        promedio += calificacion
    }
    
}
console.log(`${cantidadEstudiates} fueron evaluados 
    \nEl promedio general de calificaciones es de ${promedio / cantidadEstudiates} 
    \n${calificacionSuperior} Estudiante/s obtuvieron una calificaion superior a 60`);