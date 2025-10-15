/* 1-. Edad y etapa de vida
Pide la edad de una persona.
Si es menor a 13 → “Eres un niño”.
Si tiene entre 13 y 17 → “Eres adolescente”.
Si tiene 18 o más → “Eres adulto”.
Práctica: uso de rangos con if, else if, else.
*/

function verificarEtapa() {
    let edad = parseInt(prompt("Ingrese su edad: "));
    if (edad < 13) {
        alert("Eres un niño");
    } else if (edad >= 13 && edad < 18) {
        alert("Eres un adolescente");
    } else {
        alert("Eres un adulto")
    }
}

/* 2-. Validar contraseña exacta
Pide una contraseña.
Si el texto ingresado es exactamente "12345", muestra “Acceso permitido”.
Si no, muestra “Acceso denegado”.
Práctica: comparación exacta (===).
*/

function contraseña() {
    let password = prompt("Ingrese la contraseña: ");
    if (password === "12345") {
        alert("Acceso permitido.")
    } else {
        alert("Acceso denegado.")
    }
}



/* 3-. Verificar letra en palabra
Pide una palabra.
Si contiene la letra “e” (mayúscula o minúscula) → “La palabra contiene la letra E”.
Si no → “No contiene la letra E”.
Usa:
if (palabra.toLowerCase().includes('e')) { ... }
*/
function word() {
    let word = prompt("Ingrese una palabra: ")
    if (word.toLowerCase().includes('e')) {
        alert("La palabra contiene la letra E");
    } else {
        alert("No contiene la letra E");
    }
}


/* 4-. Comparar dos números
Pide dos números con prompt().
Si el primero es mayor → “El primer número es mayor”.
Si el segundo es mayor → “El segundo número es mayor”.
Si son iguales → “Son iguales”.
Práctica: comparaciones dobles.
*/

function number() {
    let num = parseInt(prompt("Ingrese el primer número: "));
    let num2 = parseInt(prompt("Ingrese el segundo número: "));
    if (num > num2) {
        alert("El primer número es mayor.");
    } else if (num < num2) {
        alert("El segundo número es mayor.");
    } else {
        alert("Son iguales.");
    }
}

/* 5-. Determinar si el número es par o impar
Pide un número.
Si el resto al dividir por 2 (% 2) es 0 → “Número par”.
Si no → “Número impar”.
Práctica: uso del operador módulo %.
*/
function num() {
    let numero = parseInt(prompt("Ingrese um número: "));
    if (numero % 2 == 0) {
        alert("Número par.");
    } else {
        alert("Número impar.");
    }
}



/* 6-. Revisar palabra inicial
Pide una palabra.
Si empieza con la letra “A” o “a” → “Empieza con A”.
Si no → “No empieza con A”.
💡 Puedes usar:
if (palabra[0].toLowerCase() === 'a') { ... }
*/
function palabra() {
    let word = prompt("Ingrese una palabra: ");
    if (word[0].toLowerCase() === 'a') {
        alert("Empieza con A")
    } else {
        alert("No empieza con A.")
    }
}

/* 7-. Temperatura ambiente
Pide una temperatura.
Si es menor a 10 → “Hace frío”.
Si es entre 10 y 25 → “Clima templado”.
Si es mayor o igual a 26 → “Hace calor”.
Práctica: comparaciones encadenadas.
*/

function temp() {
    let clima = parseInt(prompt("Ingrese temperatura: "));
    if (clima < 10) {
        alert("Hace frío.");
    } else if (clima >= 10 && clima < 25) {
        alert("Clima templado.");
    } else {
        alert("Hace Calor.");
    }
}


/* 8-. Nombre reconocido
Pide un nombre.
Si el nombre es “Dany” → “Hola, profesor 👋”.
Si el nombre es “Ely” → “Hola, mamá 🌷”.
En cualquier otro caso → “Hola, visitante”.
Práctica: varias condiciones exclusivas.
*/

function nombrePersona() {
    let nombre = prompt("Ingrese su nombre: ")
    if (nombre.toLowerCase().includes("dany")) {
        alert("Hola, profesor");
    } else if (nombre.toLowerCase().includes("ely")) {
        alert("Hola, mamá");
    } else {
        alert("Hola, visitante");
    }
}


/* 9 -. Nota de evaluación
Pide una nota entre 1 y 7.
Si es 4 o más → “Aprobado”.
Si es menor que 4 → “Reprobado”.
Si está fuera del rango 1–7 → “Nota inválida”.
Práctica: validaciones con límites.
*/

function calificaciones() {
  let nota = parseInt(prompt("Ingrese su nota: "));
  if (nota > 7) {
    alert("Valor no válido.");
  } else if (nota >= 4) {
    alert("Aprobado.")
  } else if (nota < 4) {
    alert("Reprobado");
  } else if(nota < 1 && nota > 7){
    alert("Nota inválida.")
  }
}


/* 10-. Verificar si contiene una palabra clave
Pide una frase.
Si incluye la palabra “Jesús” (mayúscula o minúscula) → “Tu frase tiene la palabra clave 🙌”.
Si no → “No contiene la palabra clave”.
Usa:
if (frase.toLowerCase().includes('jesús')) { ... }
*/

function clave() {
    let frase = prompt("Ingrese una frase: ");
    if (frase.toLowerCase().includes('jesús')) {
        alert("Tu frase tiene la palabra clave 🙌");
    } else {
        alert("No contiene la palabra clave");
    }
}