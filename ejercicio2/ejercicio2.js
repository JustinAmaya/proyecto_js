let nombre = prompt("ingresar nombre");
let carnet = prompt("ingresar numero de carnet");
let examen = prompt("ingresar nota de examen");
let tareas = prompt("ingresar nota de tareas");
let asistencia = prompt("ingresar nota de asistencia");
let investigacion = prompt("ingresar nota de investigacion");

const notaExamen = examen * 0.2;
const notaTarea = tareas * 0.4;
const notaAsistencia = asistencia * 0.1;
const notaInvestigacion = investigacion * 0.3;

const notaFinal = notaExamen + notaTarea + notaAsistencia + notaInvestigacion;
document.write("datos del alumno: <br>" );
document.write("nombre: " + nombre + "<br>");
document.write("Carnet: " + carnet + "<br>");
document.write("nota final: " + notaFinal.toFixed(2));