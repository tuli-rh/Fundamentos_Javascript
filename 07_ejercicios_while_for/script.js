// ejemplos while - for
// Contar números del 10 al 1
function ejecutarWhile() {
    let resultado = "El resultado es: ";
    let count = 10;
    while (count > 0) {
        resultado += ' $(count)';

        count--
    }
    alert(resultado);
}

/* Ejercicio 1 
Bucle while: Imprimir del 1 a n (n es ingresado por teclado).
Escribe un programa que utilice un bucle while para imprimir los números del 1 al n con un solo Alert.
*/
function imprimirNum() {
    let resultado = "contamos: "
    let n = parseInt(prompt("Ingresar numero"));
    let contador = 1;
    while (contador <= n) {
        resultado += ` ${contador}`;
        contador++;
    }
    alert("Números del 1 al " + n + ":\n" + resultado)
}

/*Bucle while: Cuenta regresiva del n al 1 (n es ingresado por teclado)
Crea un programa que muestre una cuenta regresiva desde n hasta 1 utilizando un bucle while.*/
function cuentaRegresiva() {
    let contador = parseInt(prompt("Ingresa un número"));
    let resultado = "Conteo: ";
    while (contador > 0) {
        resultado += ` ${contador}`;
        contador--;
    }
    alert(resultado);
}

/* Bucle while: Sumar los n primeros números
Usando un bucle for, calcula la suma de los números n primeros números  muestra el resultado en la consola.*/
function sumaNumeros() {
    let suma = 0;
    let numero = parseInt(prompt("Ingrese un Número"));
    let contador = 1;
    let resultado = "Suma: 0 "
    while (contador <= numero) {
        suma += contador;
        resultado += ` + ${contador}`;
        contador++;
    }
    alert(`${resultado} = ${suma}`)
}

/*Bucle while: Imprimir múltiplos de 2 del 1 al n (n es el límite de números a encontrar)
Escribe un programa que use un bucle for para imprimir los múltiplos de 2 que hay entre 1 y 10 (inclusive).*/
function imprimirNum() {
    let numero = parseInt(prompt("Ingresar número: "))
    let count = 1;
    let result = "El resultado es: "
    while (count < numero) {
        count++
        if (count % 2 == 0) {
            result += ` ${count}`
        }
    }
    alert(` ${result}`)
}

// bucles for

/* Bucle for: Tabla de multiplicar
Pide un número al usuario e imprime su tabla de multiplicar del 1 al 10 en un solo alert.
*/

function tablaMultiplicar() {
    let num = parseInt(prompt("Ingre un número: "));
    let tablas = `Tabla de ${num}: `;
    
    for(let i = 1; i <= 10; i++) {
        tablas += `\n ${num} x ${1} = `
    }
}

