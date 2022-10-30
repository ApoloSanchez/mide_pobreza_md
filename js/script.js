alert("¡Hola!, este simulador está diseñado para clasificar a los hogares de acuerdo a la metodología de medición de pobreza multidimensional de CONEVAL. Esta diseñado específicamente para hogares unipersonales en México.");

//Líneas de pobreza en pesos mexicanos, actualizadas a julio de 2022.
const urbanPovLine = 4105;
const xUrbanPovLine = 2043;
const ruralPovLine = 2928;
const xRuralPovLine = 1567;

//Mensajes de RESULTADO de Medición Multidimensional de la Pobreza
const msgpovMultXm = "Hogar en Pobreza Multidimensional Extrema"; //xpoverty+3carencias
const msgpovMultMod = "Hogar en Pobreza Multidimensional Moderada"; //Poverty+1carencia
const msgVulnCarSocs = "Hogar Vulnerable por Carencias Sociales"; //NoPoverty+Xcarencia
const msgVulIngresos = "Hogar Vulnerable por ingresos"; //Poverty+ (carencia=0)
const msgNoPovNoVul = "Hogar No Pobre y no Vulnerable"; //NoPoverty+ (carencia=0)

//Mensajes en prompts
const idIn = "Ingrese el folio identificador asignado al hogar que evaluará"
const zonaIn = "Si el hogar se encuentra en zona urbana, escriba 1. Si el hogar se encuentra en zona rural, escriba 0";
const yearIn = "Escriba el año de nacimiento del miembro del hogar en formato de cuatro cifras, ej. 1986";
const ingresoIn = "Escriba el ingreso mensual total en pesos mexicanos sin decimales ni caracteres especiales. Considere: \n INGRESOS MONETARIOS:  \n-remuneraciones al trabajo, \n -ingreso por trabajo independiente, \n-ingresos por renta de propiedades, \n- transferencias, \n INGRESOS NO MONETARIOS: \n-pagos en especie, \n-ayudas en especie.";
const educacion1In = "Ingrese el número correspondiente según el último grado de estudios concluído: \n 0=sin estudios, \n-1=preescolar, \n-2=primaria, \n-3=secundaria, \n-4=preparatoria, \n-5.-licencitura u otro nivel superior"
const educacion2In = "¿Elm miembro del hogar se encuentra inscrito en algún centro educativo?\n en caso afirmativo, escriba el número 1 \n en caso negativo, escriba el número 0";
const saludIn = "¿El miembro del hogar se encuentra adscrito a algun servicio de salud (IMSS, ISSSTE, OTRO O PRIVADO) \n en caso afirmativo, escriba el número 1 \n en caso negativo, escriba el número 2";
const segSocIn = "¿El miembro del hogar cuenta con acceso a seguridad social (puede ser inscripción obligatoria o voluntaria, de acceso directo o por parentesco) o alguna pensión gubernamental? \n en caso afirmativo, escriba el número 1 \n en caso negativo, escriba el número 0";
const segAlimIn = "";
const calVivIn = "Escriba el número 1 si la vivienda tiene al menos una de estas características, en caso contrario, escriba el número 2 \n -Piso de tierra, \n-techo de lámina de cartón o desecho, \n-muros de embarro o bajaréque, lámina de cartón, metálica, asbesto o desecho.";
const servsVivIn = "Escriba el número 1 si la vivienda tiene al menos una de las siguientes características, en caso contrario, escriba el número 2 \n -Agua de pozo, río, etc. o agua entubada por acarreo de otra vivienda o de llave pública, \n-sin drenaje o con drenaje que va al río, calle, etc., \n-sin energía eléctrica, \n-cocina con leña o carbón SIN chimenea.";

//Variables default
let Xpoverty = true;
let Poverty = true;
let NoPoverty = true;

//Funciones
//función de marcado de tipo de pobreza por ingreso
function povertyIncome (zona, ingreso, UrbanPovLine, xUrbanPovLine, RuralPovLine, xRuralPovLine) {
    if (((zona === 1) && (ingreso < xUrbanPovLine)) || ((zona === 0) && (ingreso < xRuralPovLine))) {
        let Xpoverty = 1;
        if ((Xpoverty != 1) && ((zona === 1) && (ingreso < UrbanPovLine)) || ((Xpoverty != 1) && (zona === 0) && (ingreso < RuralPovLine))) {
            let poverty = 1;
        }
    } else {
        let noPoverty = 1;
    }
}

//funcion para determinar rezago educativo
function situacionEducacion () {

}
//Objeto: Perfil Multidimensional de la Pobreza en el Hogar
class Hogar {
    constructor(id, pobreza,rezagoEduc, sinSalud, sinSegSoc, sinSegAlimentaria, sinCalidadVivienda, sinServsVivienda) {
        this.id = id;
        this.pobreza = pobreza;
        this.rezagoEduc = rezagoEduc;
        this.sinSalud = sinSalud;
        this.sinSegSoc = sinSegSoc;
        this.sinSegAlimentaria = sinSegAlimentaria;
        this.sinCalidadVivivienda = sinCalidadVivienda;
        this.sinServsVivienda = sinServsVivienda;
    }
}

//Variables a ingresar por prompt
let id = prompt(idIn);
let zona = parseInt(prompt(zonaIn));
let year = parseInt(prompt(yearIn));
let ingreso = parseInt(prompt(ingresoIn));
let educacion1 = prompt(educacion1In);
let educacion2 = prompt(educacion2In);
let salud=prompt(saludIn);
let segSoc=prompt(segSocIn);
let alimentacion=prompt(segAlimIn);
let vivienda=prompt(calVivIn);
let servicios=prompt(servsVivIn);

const Hogar1= new Hogar(id, pobreza, rezagoEduc, sinSalud, sinSegSoc, sinSegAlimentaria, sinCalidadVivienda, sinServsVivienda);

