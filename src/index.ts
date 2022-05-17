let nombre: string = String(prompt("Ingrese nombre"));
let notaPractica: number = Number(prompt("Ingrese nota Practica"));
let notaProblemas: number = Number(prompt("Ingrese nota Problemas"));
let notaTeorica: number = Number(prompt("Ingrese nota Teorica"));

let notaResultado: number = 0 <= 20;

if (nombre !== "") {
  while ((notaPractica, notaProblemas, notaTeorica <= 10)) {
    notaResultado =
      Number(notaPractica * 0.1) + notaProblemas * 0.5 + notaTeorica * 0.4;
    console.log("La nota final es " + notaResultado);
    break;
  }
} else {
  console.log("Error en el ingreso de datos");
}
