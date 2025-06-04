// Declaración de variables
let edad = 17; // Tipo numérico INT
let valorDeEuler = 2.71828; // Numerico com parte decimal
let comidasDelDia = "Desayuno, almuerzo y cena :)"; // String
let pregunta = true; // Valor Verdadero o Falso (0, 1) Boolean
let frutasCitricas = ["Limón", " naranja", " mandarina", " toronja"]; // Array/lista de elementos
let informacionPersonal = { nombre: "Yulieth", apellido: "Gonzalez", edad: 17, curso: 3 }; // Object - Diccionario
let valorIndefinido; // Sin valor asignaodo - undefined
let valorNulo = null; // valor nulo - null
const mesDeNacimiento = "Marzo"; // Constante - No varia

// Funciones para mostrar cada valor con alert() 
// Bloque de codigo que reliza una tarea especifica
function mostrarEdad() {
  alert("Edad: " + edad);
}

function mostrarValorDeEuler() {
  alert("Número decimal: " + valorDeEuler);
}

function mostrarComidasDelDia() {
  alert("Comidas necesarias durante el día: " + comidasDelDia);
}

function mostrarPregunta() {
  alert("¿Eres estudiante?: " + pregunta);
}

function mostrarFrutasCitricas() {
  alert("Frutas citricas: " + frutasCitricas);
}

function mostrarInformacionPersonal() {
  alert("Información Personal: " + JSON.stringify(informacionPersonal));
}

function mostrarCursos() {
  alert("Limites de cursos: " + valorIndefinido);
}

function mostrarNulo() {
  alert("Valor nulo: " + valorNulo);
}

function mostrarMesDeNacimiento() {
  alert("Mes de nacimiento: " + mesDeNacimiento);
}
