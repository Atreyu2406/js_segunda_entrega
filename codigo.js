class Materia {
    constructor (codigo, nombre, profesor, alumnos) {
        this.codigo = codigo, 
        this.nombre = nombre,
        this.profesor = profesor,
        this.alumnos = [alumnos],
        this.cantidad = 0;
    }
    agregarAlumno(alumno) {
        this.alumnos.push(alumno);
    }
    obtenerInformacion(materia) {
        if (materia == this.nombre) {
            alert(`El código es ${this.codigo}\nLos alumnos son: ${this.alumnos}`);
        } else {
            alert("La materia no existe");
        }
    }
    cantMaterias(alumno) {
        for (const ingresado of this.alumnos) {
            if (ingresado.includes(alumno)) {
                this.cantidad++;
            }
        }
    }
}

const materia1 = new Materia(
    01,
    "Croquet con Flamencos",
    "Lewis Carrol",
    [" Conejo Blanco", " Oruga Azul", " Sombrerero Loco", " Reina de Corazones"],
);
const materia2 = new Materia(
    02,
    "Quidditch",
    "J. K. Rowling",
    ["Conejo Blanco", "Oruga Azul", "Sombrerero Loco", "Reina de Corazones"],
);
const materia3 = new Materia(
    03,
    "Juegos del Hambre",
    "Lewis Carrol",
    ["Conejo Blanco", "Oruga Azul", "Sombrerero Loco", "Reina de Corazones"],
);
const materia4 = new Materia(
    04,
    "Razonamiento Deductivo",
    "Arthur Conan Doyle",
    ["Conejo Blanco", "Oruga Azul", "Sombrerero Loco", "Reina de Corazones"],
);

let cupo1 = false;
let cupo2 = false;
let cupo3 = false;
let cupo4 = false;
let nombreAlumno;
let elegirMateria;
let ciclo = false;

nombreAlumno = prompt ("Ingrese nombre del alumno:");
while (ciclo == false) {
    let pregunta = prompt("Quieres anotarte?")
    if (pregunta == "si") {
        let elegirMateria = prompt("Qué materia\n1. Mat\n2. Lengua");
        if (elegirMateria == 1 && cupo1 ==  false) {
            materia1.agregarAlumno(nombreAlumno); 
            materia1.cantMaterias(nombreAlumno);
            cupo1 = true; 
        } else if (elegirMateria == 2 && cupo2 == false) {
            materia2.agregarAlumno(nombreAlumno);
            materia2.cantMaterias(nombreAlumno);
            cupo2 = true;
        } else if (elegirMateria == 3 && cupo3 == false) {
            materia3.agregarAlumno(nombreAlumno);
            materia3.cantMaterias(nombreAlumno);
            cupo3 = true;
        } else if (elegirMateria == 4 && cupo4 == false) {
            materia4.agregarAlumno(nombreAlumno);
            materia4.cantMaterias(nombreAlumno);
            cupo4 = true;
        } else {
            alert ("Ya estás registrado en la materia");
        }
    } else {
        alert ("Gracias");
        ciclo = true;
    }
}

let preguntaDos = prompt ("Quieres saber la cantidad de materias en las cuales te anotaste?");
if (preguntaDos == "si") {
    let total = materia1.cantidad + materia2.cantidad + materia3.cantidad + materia4.cantidad;
    alert(total);
}

materia1.nombre = "cro";
let preguntaTres = prompt ("Escribe el nombre de la materia");
if (preguntaTres == "cro") {
    materia1.obtenerInformacion(preguntaTres);
}