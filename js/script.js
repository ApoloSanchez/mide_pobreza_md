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
const saludIn = "¿El miembro del hogar se encuentra adscrito a algun servicio de salud (IMSS, ISSSTE, OTRO O PRIVADO) \n en caso afirmativo, escriba el número 1 \n en caso negativo, escriba el número 2";
const segSocIn = "¿El miembro del hogar cuenta con acceso a seguridad social (puede ser inscripción obligatoria o voluntaria, de acceso directo o por parentesco) o alguna pensión gubernamental? \n en caso afirmativo, escriba el número 1 \n en caso negativo, escriba el número 0";
const calVivIn = "Escriba el número 1 si la vivienda tiene al menos una de estas características, en caso contrario, escriba el número 2 \n -Piso de tierra, \n-techo de lámina de cartón o desecho, \n-muros de embarro o bajaréque, lámina de cartón, metálica, asbesto o desecho.";
const servsVivIn = "Escriba el número 1 si la vivienda tiene al menos una de las siguientes características, en caso contrario, escriba el número 2 \n -Agua de pozo, río, etc. o agua entubada por acarreo de otra vivienda o de llave pública, \n-sin drenaje o con drenaje que va al río, calle, etc., \n-sin energía eléctrica, \n-cocina con leña o carbón SIN chimenea.";

//Mensajes de RESULTADO de Medición Multidimensional de la Pobreza
const msgpovMultXm = "Hogar en Pobreza Multidimensional Extrema"; //pobreza1 & 3 o mas carencias
const msgpovMultMod = "Hogar en Pobreza Multidimensional Moderada"; //pobreza2 & 1 o 2 carencias
const msgVulnCarSocs = "Hogar Vulnerable por Carencias Sociales"; //pobreza3 & 1 o más carencias
const msgVulIngresos = "Hogar Vulnerable por ingresos"; //pobreza2 & 0 carencias
const msgNoPovNoVul = "Hogar No Pobre y no Vulnerable"; //pobreza3 & 0 carencias

//Funciones
//función para determinar nivel de pobreza por ingresos.
function pobrezaIngresos(zona, ingreso) {
    if (zona === "urbana") {
        povLine = urbanPovLine;
        xPovLine = xUrbanPovLine;
    } else {
        povLine = ruralPovLine;
        xPovLine = xRuralPovLine;
    }
    if ((ingreso < povLine)) {
        if (ingreso > xPovLine) {
            pobreza = 2;
        } else if (ingreso < xPovLine) {
            pobreza = 1;
        }
    } else {
        pobreza = 3;
    }
}
//funcion para determinar rezago educativo: determina rezago 0 o 1.
function situacionEducacion(year) {
    edad=2022-year;
    if ((educacion1 < 2) && ((edad > 15) || (year < case82))) {
        rezago = "1";
    } else if ((educacion1 < 3) && ((edad > 15) || (case82 < year < case97))) {
        rezago = "2";
    } else if ((educacion1 < 4) && ((edad > 21) || (year < case97))) {
        rezago = "3";
    } else if (((15 < edad) && (edad < 22)) && (educacion2 == "0")) {
        rezago = "4";
    }
    else {
        rezago = 0;
    }
}
//Objeto: Perfil Multidimensional de la Pobreza en el Hogar
class Hogar {
    constructor(id, pobreza,rezagoEduc, sinSalud, sinSegSoc, sinSegAlimentaria, sinCalidadVivienda, sinServsVivienda) {
        this.id = id;
        this.pobreza = pobreza;
        this.rezagoEduc = rezagoEduc;
        this.sinSalud = sinSalud;
        this.sinSegSoc = sinSegSoc;
        this.sinSegAlimentaria = sinSegAlimentaria;//si pobreza es mayor que 1, sinSegAlimentaria es cero.
        this.sinCalidadVivivienda = sinCalidadVivienda;
        this.sinServsVivienda = sinServsVivienda;
    }
}
//Variables a ingresar por prompt
let id = prompt(idIn);
pobrezaIngresos (prompt(zonaIn), ingreso);
let ingreso = parseInt(prompt(ingresoIn))
let year = parseInt(prompt(yearIn));
let educacion1 = prompt(educacion1In);
let educacion2 = prompt(educacion2In);
let salud = prompt(saludIn);
let segSoc = prompt(segSocIn);
let alimentacion = prompt(segAlimIn);
let vivienda = prompt(calVivIn);
let servicios = prompt(servsVivIn);

// const Hogar1= new Hogar(id, pobreza, rezagoEduc, sinSalud, sinSegSoc, sinSegAlimentaria, sinCalidadVivienda, sinServsVivienda);

//mostrar objeto Hogar con forEach
Hogar.forEach(Hogar => {
    console.log(Hogar);
});
const filtrado= Hogar.filter ((Hogar) =>{
    return Hogar.id === "001" //OJO, registré 001 provisionalmente. No coincide con registro.PONER POBREZA
})
console.log(filtrado);
