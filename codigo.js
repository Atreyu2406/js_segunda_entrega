class Materia {
    constructor (codigo, nombre, profesor, alumnos) {
        this.codigo = codigo, 
        this.nombre = nombre,
        this.profesor = profesor,
        this.alumnos = alumnos,
        this.cantidad = 0;
    }
    agregarAlumno(alumno) {
        this.alumnos.push(alumno);
    }
    obtenerInformacion(materia) {
        if (materia == this.codigo) {
            alert(`Código: ${this.codigo}\nMateria: ${this.nombre}\nProfesor: ${this.profesor}\nAlumnos anotados: ${this.alumnos}`);
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
    1,
    "Croquet con Flamencos",
    "Lewis Carrol",
    ["Conejo Blanco", "Oruga Azul", "Sombrerero Loco", "Reina de Corazones"],
);
const materia2 = new Materia(
    2,
    "Quidditch",
    "J. K. Rowling",
    ["Harry Potter", "Ron Weasley", "Hermione Granger", "Draco Malfoy"],
);
const materia3 = new Materia(
    3,
    "Juegos del Hambre",
    "Lewis Carrol",
    ["Katniss Everdeen", "Peeta Mellark", "Gale Hawthorne", "Haymitch Abernathy"],
);
const materia4 = new Materia(
    25,
    "Guerra de Cometas",
    "Chuck Lorre",
    ["Sheldon Copper", "Penny", "Leonard Hofstadter", "Howard Wolowitz"],
);
const materia5 = new Materia(
    81,
    "Ajedrez Tridimensional",
    "Gene Roddenberry",
    ["Spock", "James T. Kirk", "Nyota Uhura", "Leonard McCoy"],
);
const materia6 = new Materia(
    221,
    "Razonamiento Deductivo",
    "Arthur Conan Doyle",
    ["Sherlock Holmes", "Moriarty", "Irene Adler", "John Watson"],
);

let cupo1 = false;
let cupo2 = false;
let cupo3 = false;
let cupo4 = false;
let cupo5 = false;
let cupo6 = false;
let nombreAlumno;
let elegirMateria;
let ciclo = false;
let ciclo2 = false;
let ciclo3 = false;
let ciclo4 = false;
let preguntaTres;

alert("Colegio para Seres Mágicos de CoderHouse.\n\nBienvenidos Alumnos/as de Primer Año!!!\nSe ha abierto la Inscripción para las Materias Deportivas.\nRecuerden que pueden anotarse en todas las materias que deseen.");

do {
    nombreAlumno = prompt ("Ingrese su nombre:");
    if (!isNaN(nombreAlumno)) {
    alert ("Somos Seres Mágicos, pero todavía usamos letras en nuestros nombres.");
    } else {
        alert (`Saludos ${nombreAlumno}!`);
        ciclo2 = true;
    }
} while (ciclo2 == false);

while (ciclo == false) {
    let pregunta = prompt(`¿Quieres registrarte? (s/n)`)
    if (pregunta == "s") {
        let elegirMateria = prompt("Elige tu materia deportiva.\n1. Croquet con Flamencos\n2. Quidditch\n3. Juegos del Hambre\n4. Guerra de Cometas\n5. Ajedrez Tridimensional\n6. Razonamiento Deductivo");
        if (elegirMateria == 1 && cupo1 ==  false) {
            materia1.agregarAlumno(nombreAlumno); 
            materia1.cantMaterias(nombreAlumno);
            alert (`Te has anotado en ${materia1.nombre}!\nRecuerda llevar tus propios flamencos adiestrados a la clase.`);
            cupo1 = true; 
        } else if (elegirMateria == 2 && cupo2 == false) {
            materia2.agregarAlumno(nombreAlumno);
            materia2.cantMaterias(nombreAlumno);
            alert (`Te has anotado en ${materia2.nombre}!\nLas pruebas para integrar el equipo comienzan la próxima semana. Buena Suerte!`);
            cupo2 = true;
        } else if (elegirMateria == 3 && cupo3 == false) {
            materia3.agregarAlumno(nombreAlumno);
            materia3.cantMaterias(nombreAlumno);
            alert (`Te has anotado en ${materia3.nombre}!\nNo se preocupen! Es una versión adaptada. No es de vida o muerte... Solo de muerte.`);
            cupo3 = true;
        } else if (elegirMateria == 4 && cupo4 == false) {
            materia4.agregarAlumno(nombreAlumno);
            materia4.cantMaterias(nombreAlumno);
            alert (`Te has anotado en ${materia4.nombre}!\nNOTA: Son frecuentes las quemaduras por cuerdas.`);
            cupo4 = true;
        } else if (elegirMateria == 5 && cupo5 == false) {
            materia5.agregarAlumno(nombreAlumno);
            materia5.cantMaterias(nombreAlumno);
            alert (`Te has anotado en ${materia5.nombre}!\nExcelente elección. La diversión se multiplica por tres!!!`);
            cupo5 = true;
        } else if (elegirMateria == 6 && cupo6 == false) {
            materia6.agregarAlumno(nombreAlumno);
            materia6.cantMaterias(nombreAlumno);
            alert (`Te has anotado en ${materia6.nombre}!\nElemental mi Querido Watson.`);
            cupo6 = true; 
        } else if (elegirMateria >= 7 || isNaN(elegirMateria)) {
            alert ("Opción inválida. Vuelva a intentar");
        } else {
            alert ("Ya estás registrado en la materia.");
        }
    } else if (!isNaN(pregunta)) {
        alert ("Opción inválida. Vuelva a intentar");
    } else if (pregunta == "n") {
        alert ("A continuación te daremos información que puede resultarte muy útil.\n(En realidad no lo creo).");
        ciclo = true;
    } else {
        alert ("Opción inválida. Vuelva a intentar");
    }
}

do {
    let preguntaDos = prompt ("¿Quieres saber la cantidad de materias en las cuales te anotaste? (s/n).");
    if (preguntaDos == "s") {
        let total = materia1.cantidad + materia2.cantidad + materia3.cantidad + materia4.cantidad + materia5.cantidad + materia6.cantidad;
        if (total == 1) {
            alert("Te has anotado en: " + total + " materia.");
            ciclo3 = true;
        } else if (total == 0) {
            alert("Te has anotado en: " + total + " materias.\n¿Entiendes el concepto de OJOTA en el deporte? No importa.\nEn el próximo semestre se vuelven a abrir las inscripciones.");
            ciclo3 = true;
        } else {
            alert("Te has anotado en: " + total + " materias.");
            ciclo3 = true;
        } 
    } else if (!isNaN(preguntaDos)) {
        alert ("Respuesta inválida. Vuelva a intentar.");
    } else if (preguntaDos == "n") {
        alert ("OK! Espero que tengas buena memoria para recordarlo.");
        ciclo3 = true; 
    } else {
        alert ("Respuesta inválida. Vuelva a intentar.");
    }
} while (ciclo3 == false);

do {
    let preguntaTres = prompt ("Escribe el código de la materia y recibirás información de la misma.\nIngrese `esc` para salir del sistema.\nVerifica si estás anotado.\nNuestros amigos/as de Sistemas suelen cometer ciertos olvidos.\n\nCódigos: 1 - 2 - 3 - 25 - 81 - 221.");
    if (preguntaTres == 1) {
        materia1.obtenerInformacion(preguntaTres);
    } else if (preguntaTres == 2) {
        materia2.obtenerInformacion(preguntaTres);
    } else if (preguntaTres == 3) {
        materia3.obtenerInformacion(preguntaTres);
    } else if (preguntaTres == 25) {
        materia4.obtenerInformacion(preguntaTres);
    } else if (preguntaTres == 81) {
        materia5.obtenerInformacion(preguntaTres);
    } else if (preguntaTres == 221) {
        materia6.obtenerInformacion(preguntaTres);
    } else if (preguntaTres == "esc") {
        alert("Gracias por utilizar nuestro Sistema de Registro (no mágico) para Seres Mágicos de CoderHouse.");
        break;
    } else {
        alert("El código es incorrecto");
    }
} while (isNaN(preguntaTres));



