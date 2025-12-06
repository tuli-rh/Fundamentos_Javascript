/* Ejercicio 1: Frase a partir de un arreglo de palabras
Instrucciones:
Dado el siguiente arreglo de palabras:
let palabras = ["Juan", "corre", "rápidamente", "feliz", "parque"];

Usa los elementos del arreglo para construir una frase coherente y completa.
Utiliza alert() para mostrar la frase resultante.
Puedes agregar conectores o palabras que no estén en el arreglo 
(por ejemplo, "en", "el", etc.).
*/
let palabras = ["Juan", "corre", "rápidamente", "feliz", "parque"];
function fraseArreglo() {

  alert(`frase: ${palabras[0]} esta ${palabras[3]} y ${palabras[1]} ${palabras[2]} por el ${palabras[4]}`);
}

/*  Ejercicio 2: Construir frase con número, verbo, adverbio, adjetivo y sustantivo
Instrucciones:
Dado el siguiente arreglo:
let datos = [3, "gatos", "negros", "duermen", "tranquilamente"];

Accede a los elementos necesarios y ordénalos para formar una frase correcta y completa.
Concátalos con espacios y muestra la frase con alert().
Puedes incluir artículos o conectores ("Los", "y", etc.) según sea necesario.
*/
let datos = [3, "gatos", "negros", "duermen", "tranquilamente"];
function construirFrase() {
  alert(`Frase: De los ${datos[0]} ${datos[1]} ${datos[2]} dos gatos ${datos[3]} muy ${datos[4]}`);
}

/*  Ejercicio 3: Suma de dos elementos en una matriz de dos dimensiones
Instrucciones:
Dada la siguiente matriz:

let matriz = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
];
Accede a dos valores específicos dentro de la matriz utilizando sus posiciones.
Realiza la suma de ambos valores.
Muestra el resultado mediante alert() con un mensaje explicativo.
*/
let matriz = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
];

function sumaElementos() {
  let valor1 = matriz[0][1];  
  let valor2 = matriz[2][0];  
  let suma = valor1 + valor2;

  alert(`La suma de ${valor1} y ${valor2} es: ${suma}`);
}



/* Ejercicio 4: Suma de dos valores en una matriz de tres niveles
Instrucciones:
Dado el siguiente arreglo anidado:

let datos = [
  [1, 2, 3, 4],
  [5, 6, [7, 8, [9, 10]]]
];

Accede a un número del primer subarreglo y a otro número que esté en la tercera dimensión (nivel más profundo).
Suma los dos valores accedidos.
Muestra el resultado con alert().
*/
let dato = [
  [1, 2, 3, 4],
  [5, 6, [7, 8, [9, 10]]]
];

function sumaValores() {
  let num1 = dato[0][1];
  let num2 = dato [1][2][2][0];
  let suma = num1 + num2;
  alert(`La suma de ${num1} y ${num2} es ${suma}`);
}

/* Ejercicio 5: Construir frase usando datos de arreglo + matriz
Instrucciones:
Dado el siguiente código:

let sujeto = ["El perro", "El gato"];
let acciones = [
  ["ladra", "corre"],
  ["duerme", "salta"]
];

Accede a un sujeto del arreglo y una acción correspondiente desde la matriz.
Une ambos con un espacio para construir una frase con sentido completo.
Muestra la frase mediante alert().
*/
let sujeto = ["El perro", "El gato"];
let acciones = [
  ["ladra", "corre"],
  ["duerme", "salta"]
];

function frase() {
  let sujeto = sujeto[0];
  let accion = accion[0][1];
  alert(`${sujeto} ${accion}`);
}