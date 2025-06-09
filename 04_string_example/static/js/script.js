// Uso de string

function usarString() {
  let nombre = prompt("Ingrese su nombre: "); // Variable tipo texto
  // Uso de length --> Largo de una variable
  let primeraLetra = nombre[0];
  // Asignamos valor a primera Letra con posición 0 de nombre
  let ultimaLetra = nombre[nombre.length - 1];
  alert("Primera letra es: " + primeraLetra +
    "\nÜltima letra es: " + ultimaLetra);
}

// Tarea: imprimir segunda y penultima letra de tu apellido

function manipulandoApellido() {
  let apellido = prompt("Ingrese su apellido: ");
  let segundaLetraApellido = apellido[0];
  let penultimaLetraApellido = apellido[apellido.length - 2];
  alert("Segunda letra es: " + segundaLetraApellido +
    "\nPenultima letra es: " + penultimaLetraApellido);
}