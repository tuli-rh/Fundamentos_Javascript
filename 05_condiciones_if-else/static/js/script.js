// Ejercicio Condiciones
console.log("Conexión con JS establecida...")

/* Edad para votar
 Solicita la edad del usuario mediante prompt(). 
 Muestra con alert() si puede votar (18 años o más) o no.
*/

function edadVotar() {
  let edad = parseInt(prompt("Ingrese su edad: ")); // Input conversión string a number
  // Condición if - ele if- else
  if (edad >= 18) {
    alert("Su edad " + edad + " aprobada para votar.");
  } else if (edad >= 0 && edad < 18) { // && compuerta AND
    alert("Su edad " + edad + " no esta aprobada para votar.");
  } else {
    alert("Ingrese un valor válido."); // Si no se cumplen las condiciones anteriores avanza a la última condición (else) mostrando una alerta.
  }
}


/* Contraseña válida
 Pide una contraseña con prompt(). 
 Si es igual a "1234", muestra un mensaje de acceso permitido. 
 En caso contrario, muestra acceso denegado.
*/

function contraseñaValida() {
  let clave = "1234"
  let password = prompt("Ingrese la contraseña: ");

  if (password == clave) {
    alert("Acceso permitido.");
  } else {
    alert("Acceso denegado.");
  }
}


/* Verificar par o impar
 Pide un número por prompt(). 
 Evalúa si el número es par o impar y muestra el resultado con alert().
*/

function verificaNumber() {
  let number = parseInt(prompt("Ingrese el número: "));

  if (number % 2 == 0) {
    alert("Número par.");
  } else {
    alert("Número impar.");
  }
}


/* Temperatura ambiental
Solicita la temperatura actual. 
Si es mayor o igual a 30, muestra “Hace calor”,
de lo contrario muestra “Clima agradable”.
*/

function temperatura() {
  let clima = parseInt(prompt("Ingrese temperatura: "));
  if (clima >= 30) {
    alert("Hace calor.");
  } else if (clima >= 0 && clima < 15) {
    alert("Hace frio.");
  } else {
    alert("Clima agradable.");
  }
}


/* Comparar dos números
 Solicita dos números al usuario. 
 Compara ambos y muestra cuál es mayor o si son iguales.
 */

function compararNumeros() {
  let number1 = parseInt(prompt("Ingrese n°1: "));
  let number2 = parseInt(prompt("Ingrese n°2: "));
  if (number1 > number2) {
    alert("N° mayor: " + number1 + " N° menor: " + number2);
  } else if (number1 < number2) {
    alert("N° mayor: " + number2 + " N° menor: " + number1);
  } else if (number1 == number2) {
    alert("Los números son iguales.");
  }
}


/* Calificación escolar
 Pide una nota entre 1 y 7. 
 Si es 4 o más, muestra “Aprobado”, si es menor, muestra “Reprobado”.
 */

function calaficaciones() {
  let nota = parseInt(prompt("Ingrese su nota: "));
  if (nota > 7) {
    alert("Valor no válido.");
  } else if (nota >= 4) {
    alert("Aprobado.")
  } else if (nota < 4) {
    alert("Reprobado");
  }
}


/* Nombre de usuario válido
 Pide un nombre de usuario. 
 Si el valor ingresado es "admin", muestra “Bienvenido, administrador”. 
 Si no, muestra “Usuario no reconocido”.
 */

function username() {
  let name = "admin"
  let usuario = prompt("Ingrese su nombre de usuario: ");

  if (usuario == name) {
    alert("Bienvenido, administrador");
  } else {
    alert("Usuario no reconocido.");
  }
}


/* Verificar si una palabra empieza con "A"
 Pide una palabra al usuario. 
 Verifica si empieza con la letra “A” mayúscula 
 y muestra un mensaje acorde. 
*/

function word() {
  let palabra = prompt("Ingrese una palabra: ");

  if (palabra[0] == "A") {
    alert("Su palabra empieza con la letra “A” mayúscula");
  } else {
    alert("Su apalabra empieza con la letra " + palabra[0]);
  }
}


/* Precio con descuento
Solicita el precio de un producto. 
Si el precio es mayor a 10000, muestra que aplica descuento. 
Si no, indica precio normal.
*/

function precio() {
  let precioDescuento = parseInt(prompt("Ingrese el precio del producto: "));

  if (precioDescuento > 10000) {
    alert("Se aplica descuento");
  } else {
    alert("Precio normal");
  }
}


/* Verificar si una persona puede conducir
Solicita la edad del usuario y si tiene licencia (por ejemplo, respondiendo "sí" o "no"). 
Si tiene 18 o más y respondió que tiene licencia, muestra “Puede conducir”. 
Si no, muestra “No puede conducir”. 
*/

function conducir() {
  let edad = parseInt(prompt("Ingrese su edad: "));
  let licencia = prompt("¿Tiene licencia? ").toLocaleLowerCase();
  if (edad >= 18 && licencia == "si") {
    alert("Puede conducir.");
  } else {
    alert("No puede conducir.");
  }
}