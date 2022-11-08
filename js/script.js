alert("¡Hola!, este simulador está diseñado para clasificar a los hogares de acuerdo a la metodología de medición de pobreza multidimensional de CONEVAL. Esta diseñado específicamente para hogares unipersonales en México.");

//Líneas de pobreza en pesos mexicanos, actualizadas a julio de 2022.
const urbanPovLine = 4105;
const xUrbanPovLine = 2043;
const ruralPovLine = 2928;
const xRuralPovLine = 1567;

// años de referencia para cálculo de rezago educativo
const case97 = 1997;
const case82 = 1982;

//Mensajes en prompts
const idIn = "Ingrese el folio identificador asignado al hogar que evaluará"
const zonaIn = "Escriba si el hogar se encuentra en zona urbana o rural";
const yearIn = "Escriba el año de nacimiento del miembro del hogar en formato de cuatro cifras, ej. 1986";
const ingresoIn = "Escriba el ingreso mensual total en pesos mexicanos sin decimales ni caracteres especiales. Considere: \n INGRESOS MONETARIOS:  \n-remuneraciones al trabajo, \n -ingreso por trabajo independiente, \n-ingresos por renta de propiedades, \n- transferencias, \n INGRESOS NO MONETARIOS: \n-pagos en especie, \n-ayudas en especie.";
const educacion1In = "Ingrese el número correspondiente según el último grado de estudios concluído: \n 0=sin estudios, \n-1=preescolar, \n-2=primaria, \n-3=secundaria, \n-4=preparatoria, \n-5.-licencitura u otro nivel superior"
const educacion2In = "Si el miembro del hogar tiene entre 16 y 21 años de edad y se encuentra cursando la preparatoria, escriba 1, de lo contrario, escriba 0";
const saludIn = "¿El miembro del hogar se encuentra adscrito a algun servicio de salud (IMSS, ISSSTE, OTRO O PRIVADO) \n en caso afirmativo, escriba el número 0 \n en caso negativo, escriba el número 1";
const segSocIn = "¿El miembro del hogar cuenta con acceso a seguridad social (puede ser inscripción obligatoria o voluntaria, de acceso directo o por parentesco) o alguna pensión gubernamental? \n en caso afirmativo, escriba el número 0 \n en caso negativo, escriba el número 1";
const calVivIn = "Escriba el número 1 si la vivienda tiene al menos una de estas características, en caso contrario, escriba el número 0 \n -Piso de tierra, \n-techo de lámina de cartón o desecho, \n-muros de embarro o bajaréque, lámina de cartón, metálica, asbesto o desecho.";
const servsVivIn = "Escriba el número 1 si la vivienda tiene al menos una de las siguientes características, en caso contrario, escriba el número 0 \n -Agua de pozo, río, etc. o agua entubada por acarreo de otra vivienda o de llave pública, \n-sin drenaje o con drenaje que va al río, calle, etc., \n-sin energía eléctrica, \n-cocina con leña o carbón SIN chimenea.";

//Mensajes de RESULTADO de Medición Multidimensional de la Pobreza
const msgpovMultXm = "Hogar en Pobreza Multidimensional Extrema"; //pobreza1 & 3 o mas carencias
const msgpovMultMod = "Hogar en Pobreza Multidimensional Moderada"; //pobreza2 & 1 o 2 carencias
const msgVulnCarSocs = "Hogar Vulnerable por Carencias Sociales"; //pobreza3 & 1 o más carencias
const msgVulIngresos = "Hogar Vulnerable por ingresos"; //pobreza2 & 0 carencias
const msgNoPovNoVul = "Hogar No Pobre y no Vulnerable"; //pobreza3 & 0 carencias

//Funciones
//función para determinar nivel de pobreza por ingresos. 1=pobreza extrema, 2=pobreza, 3=no pobreza.
function situacionIngresos(zona, ingreso) {
    if (zona === "urbana") {
        povLine = urbanPovLine;
        xPovLine = xUrbanPovLine;
    } else {
        povLine = ruralPovLine;
        xPovLine = xRuralPovLine;
    }
    if ((ingreso < povLine)) {
        if (ingreso > xPovLine) {
            return 2;
        } else if (ingreso < xPovLine) {
            return 1;
        }
    } else {
        return 3;
    }
}
//función para determinar rezago educativo: determina rezago 0 o 1.
function situacionEducativa(year, edu1, edu2) {
    edad=2022-year;
    if ((edu1 < 2) && ((edad > 15) || (year < case82))) {
        return 1;
    } else if ((edu1 < 3) && ((edad > 15) || (case82 < year < case97))) {
        return 1;
    } else if ((edu1 < 4) && ((edad > 21) || (year < case97))) {
        return 1;
    } else if (((15 < edad) && (edad < 22)) && (edu2 == "0")) {
        return 1;
    }
    else {
        return 0;
    }
}
//Función constructora de Objeto Persona
class Persona {
    constructor(id, zona, ingreso, pobrezaIngresos, year, edu1, edu2, rezagoEducativo, salud, segSoc, vivienda, servicios) {
        this.id = id;
        this.zona = zona;
        this.ingreso = ingreso;
        this.pobrezaIngresos= pobrezaIngresos;
        this.year = year;   
        this.edu1 = edu1;
        this.edu2= edu2;
        this.rezagoEducativo= rezagoEducativo;
        this.salud = salud;
        this.segSoc = segSoc;
        this.vivienda = vivienda;
        this.servicios = servicios;
    }
}
//asignar valores a propiedades del objeto Hogar, por prompt
let id = prompt(idIn);
let zona = prompt(zonaIn);
let ingreso = parseInt(prompt(ingresoIn));
let pobrezaIngresos = situacionIngresos(zona, ingreso);
let year = parseInt(prompt(yearIn));
let edu1 = parseInt(prompt(educacion1In));
let edu2 = parseInt(prompt(educacion2In));
let rezagoEducativo = situacionEducativa(year, edu1, edu2);
let salud = parseInt(prompt(saludIn));
let segSoc = parseInt(prompt(segSocIn));
let vivienda = parseInt(prompt(calVivIn));
let servicios = parseInt(prompt(servsVivIn));

//inicialización de las propiedades del objeto mediante instancia New;
const Persona1= new Persona(id, zona, ingreso, pobrezaIngresos, year, edu1, edu2, rezagoEducativo, salud, segSoc, vivienda, servicios);

//crear array de Personas
const arrayPers=[];

//agregar new Persona a arrayPersonas
arrayPers.push(new Persona(id, zona, ingreso, pobrezaIngresos, year, edu1, edu2, rezagoEducativo, salud, segSoc, vivienda, servicios));
console.log(arrayPers);
function sumaCarencias(rezago,salud,segSoc,vivienda,servicios) {
    return (rezago+salud+segSoc+vivienda+servicios)
}

const indicePrivacion= sumaCarencias(rezagoEducativo, salud, segSoc, vivienda, servicios);

function resultadoMMP (pobrezaIngresos, indicePrivacion){
    if ((pobrezaIngresos==1) && (indicePrivacion>2)) {
        alert (msgpovMultXm);
    } else if ((pobrezaIngresos==2)&&(indicePrivacion>0)) {
        alert (msgpovMultMod);
    }else if ((pobrezaIngresos==3) &&(indicePrivacion>0)){
        alert (msgVulnCarSocs);
    }else if ((pobrezaIngresos<3)&&(indicePrivacion==0)){
        alert (msgVulIngresos)
    }
    else {
        alert (msgNoPovNoVul);
    }
}

resultadoMMP(pobrezaIngresos, indicePrivacion);

//filtrado
const filtrado= arrayPers.filter ((persona) =>{
    return persona.ingreso >2000;
})

console.log(filtrado);

// //BUCLE PARA CARGAR PERSONAS, SEGÚN CANTIDAD DE CASOS A INGRESAR
// let numPersonas =parseInt(prompt ("Ingresa la cantidad de hogares unipersonales que deseas evaluar"));
// const arrayPersonas= [];
// console.log(arrayPersonas);
// let limitePersonas= parseInt(prompt("¿Cuántos hogares unipersonales quieres evaluar en esta sesión? escribe el número con caracter numérico"));
// do {
//     //asignación de valores mediante prompts
//     //cargar Personas en arrayPersonas
//     arrayPersonas.push(new Persona(id, zona, ingreso, year, educacion1, educacion2, salud, segSoc, vivienda, servicios);)
// } while (databaseHogares.length != numHogares);


