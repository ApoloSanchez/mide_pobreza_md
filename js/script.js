alert ("¡Hola!, este simulador está diseñado para clasificar a los hogares de acuerdo a la metodología de medición de pobreza multidimensional de CONEVAL. Esta diseñado específicamente para hogares unipersonales en México.");

//Líneas de pobreza en pesos mexicanos, actualizadas a septiembre de 2022.
const LineaPobrezaUrb=4194;
const LineaExtremaUrb=2114;


let mensajeExtrema= " se encuentra en situación de pobreza extrema por ingresos";
let mensajePobreza= " se encuentra en situación de pobreza por ingresos";
let mensajeNoPobreza= " no se encuentra en situación de pobreza por ingresos";

function pobreza(paramIngreso,ParamExtrema) {
    if (paramIngreso<ParamExtrema) {
        alert (nombre+mensajeExtrema);
    } else {
        alert (nombre+mensajePobreza)
    }
}

let nombre=prompt("INGRESE EL NOMBRE DE LA PERSONA A EVALUAR");
while (nombre == "") {
    nombre = prompt("DEBE INGRESAR EL NOMBRE DE LA PERSONA A EVALUAR");
}

let ingreso = parseInt(prompt("ESCRIBA EL INGRESO MENSUAL TOTAL EN PESOS MEXICANOS SIN DECIMALES Y SIN CARACTERES ESPECIALES. CONSIDERE LOS INGRESOS MONETARIOS Y NO MONETARIOS. \n INGRESOS MONETARIOS:  \n-remuneraciones al trabajo, \n -ingreso por trabajo independiente, \n-ingresos por renta de propiedades, \n- transferencias, \n INGRESOS NO MONETARIOS: \n-pagos en especie, \n-ayudas en especie."));
while ((ingreso == "")) {
    ingreso = parseInt(prompt("ESCRIBA EL INGRESO MENSUAL TOTAL EN PESOS SIN DECIMALES Y SIN CARACTERES ESPECIALES"));
}

if (ingreso<LineaPobrezaUrb) {
    pobreza (ingreso,LineaExtremaUrb)
} else {
    alert (nombre+mensajeNoPobreza);
}


// function Hogar(folio, zona,cumpleanios, ingreso, estudios, estudios2,salud, segSoc, alimentacion, vivienda, servicios) {
//     this.folio = folio;
//     this.zona=zona;
//     this.cumpleanios = cumpleanios;
//     this.ingreso = ingreso;
//     this.estudios = estudios;
//     this.estudios2 = estudios2;
//     this.salud=salud;
//     this.segSoc=segSoc;
//     this.alimentacion=alimentacion;
//     this.vivienda=vivienda;
//     this.servicios=servicios;
// }

// let cumpleanios = parseInt(prompt("INGRESE EL AÑO DE NACIMIENTO DE LA PERSONA A EVALUAR"));
// while ((cumpleanios == "") || (cumpleanios < 1910) || (cumpleanios > 2012)) {
//     cumpleanios = parseInt(prompt("INGRESE EL AÑO DE NACIMIENTO DE LA PERSONA A EVALUAR"));
// }

// let estudios=prompt("INGRESE EL NÚMERO CORRESPONDIENTE SEGÚN EL ÚLTIMO GRADO DE ESTUDIOS CONCLUÍDO: \n 0=sin estudios, \n-1=preescolar, \n-2=primaria, \n-3=secundaria, \n-4=preparatoria, \n-5.-licencitura u otro nivel superior");
// let estudios2=prompt("ACTUALMENTE SE ENCUENTRA INSCRITO EN ALGUN CENTRO EDUCATIVO?\n en caso afirmativo, escriba el número 1 \n en caso negativo, escriba el número 0");

// let salud=prompt("¿SE ENCUENTRA ADSCRITO(A) A ALGUN SERVICIO DE SALUD (IMSS, ISSSTE, OTRO O PRIVADO) \n en caso afirmativo, escriba el número 1 \n en caso negativo, escriba el número 2");
// let segSoc=prompt("¿CUENTA CON ACCESO A SEGURIDAD SOCIAL(OBLIGATORIO O VOLUNTARIO, ACCESO DIRECTO O POR PARENTESCO) O ALGUNA PENSIÓN DE APOYO GUBERNAMENTAL? \n en caso afirmativo, escriba el número 1 \n en caso negativo, escriba el número 0");
// let alimentacion=true;
// let vivienda=prompt("ESCRIBA EL NÚMERO 1 SI LA VIVIENDA TIENE AL MENOS UNA DE ESTAS CARACTERÍSTICAS, EN CASO CONTRARIO, ESCRIBA EL NÚMERO 2 \n -Piso de tierra, \n-techo de lámina de cartón o desecho, \n-muros de embarro o bajaréque, lámina de cartón, metálica, asbesto o desecho.");
// let servicios=prompt("ESCRIBA EL NÚMERO 1 SI LA VIVIENDA TIENE AL MENOS UNA DE LAS SIGUIENTES CARACTERÍSTICAS, EN CASO CONTRARIO, ESCRIBA EL NÚMERO 2 \n -Agua de pozo, río, etc. o agua entubada por acarreo de otra vivienda o de llave pública, \n-sin drenaje o con drenaje que va al río, calle, etc., \n-sin energía eléctrica, \n-cocina con leña o carbón SIN chimenea.");

// const Hogar1= new Hogar(folio, cumpleanios, ingreso, estudios, estudios2, salud, segSoc, alimentacion, vivienda, servicios,cohesion,carretera);
