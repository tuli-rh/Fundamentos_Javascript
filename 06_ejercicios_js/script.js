function verificarEtapa() {
    let edad = parseInt(prompt("Ingrese su edad: "));
    if (edad < 13) {
        alert("Eres un niño");
    } else if (edad >= 13 && edad < 18){
        alert("Eres un adolescente");
    } else {
        alert("Eres un adulto")
    }
}