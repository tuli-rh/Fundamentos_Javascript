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

/*
function precio() {
  // Añade un porcentaje de descuento e IVA y mostrar
  let iva = 0.19;
  let descuento = parseFloat(prompt("ingrese el valor de descuento: Ejemplo 20"));
  descuento /= 100; // operacion para llevar a decimal
  let precioDescuento = parseFloat(prompt("Ingrese el precio del producto: "));
  if (precioDescuento > 10000) {
    alert('el valor ingreado fue: $(precioDescuento)\n
      IVA: $(precio * IVA)\n
      ');
  } else {
    alert("Precio normal");
  }
}
*/


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

// Segunda parte de tarea

/* Comparar la longitud de dos palabras
Solicita dos palabras con prompt(). 
Compara cuántas letras tiene cada una y 
muestra cuál es más larga o si tienen el mismo largo.
*/

function palabras() {
  let palabra1 = prompt("Ingrese la palabra 1: ");
  let palabra2 = prompt("Ingrese la palabra 2: ");
  let long1 = palabra1.length;
  let long2 = palabra2.length;

  if (long1 > long2) {
    alert("La primera palabra es más larga que la segunda palabra.");
  } else if (long1 < long2) {
    alert("La segunda palabra es más larga que la primera palabra.");
  } else {
    alert("La primera palabra y la segunda palabra son del mismo largo.");
  }
}

/* Validar correo electrónico
Pide al usuario que ingrese un correo. 
Verifica si el texto contiene el símbolo @. 
Si lo tiene, muestra "Correo válido", si no, "Correo inválido".
*/

function email() {
  let correo = prompt("Ingrese su correo electrónico: ");
  if (correo.includes('@')) {
    alert("Correo válido.");
  } else {
    alert("Correo inválido.");
  }
}

/*  Verificar si un número es positivo o negativo
Solicita un número. Muestra si es positivo, negativo o cero.
*/

function verificarNum() {
  let numeros = parseFloat(prompt("Ingrese un número: "));
  if (numeros > 0) {
    alert("El número es posotivo.");
  } else if (numeros < 0){
    alert("El número es negativo.");
  } else {
    alert("El número es cero.");
  }
}

/* Saludo personalizado según hora
Pide la hora actual (en formato 24 horas). 
Si es antes de las 12, muestra "Buenos días", 
si es entre 12 y 18, "Buenas tardes", y si es mayor a 18, "Buenas noches".
*/

function saludos() {
  let hora = parseFloat(prompt("Ingrese la hora: "));
  if (hora < 12) {
    alert("Buenos días");
  } else if (hora == 12 & hora <= 18){
    alert("Buenas tardes.")
  } else if (hora > 18 && hora < 24) {
    alert("Buenas noches.")
  }
}

/* Verificar si una palabra contiene la letra "e"
Solicita una palabra. Verifica si contiene la letra "e" (minúscula). 
Si la tiene, muestra "Contiene la letra 'e'", 
si no, muestra "No contiene la letra 'e'".
*/

function letra() {
  let letraE = prompt("Ingrese una palabra: ")
  if (letraE.includes('e')) {
    alert("Contiene la letra 'e'.");
  } else {
    alert("No contienen la letra 'e'.");
  }
}