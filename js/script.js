alert ("¡Hola!, este simulador está diseñado para medir nivel de pobreza en hogares unipersonales.")

// let nombre = prompt ("Folio identificador de persona a evaluar");
// while (nombre == "" ){
//     nombre= prompt ("Es necesario ingresar un folio identificador de la persona a evaluar");
// }

// let birth = parseInt (prompt ("Ingresa el año de nacimiento"));
// while ((birth == "") || (birth <1922) || (birth>2012)){
//     birth= parseInt (prompt ("Es necesario ingresar el año de nacimiento correcto"));
// }

function Usuario(folio, cumpleanios, ingreso, estudios, salud, alimentacion, vivienda, servicios,cohesion,carretera) {
    this.folio=folio;
    this.cumpleanios=cumpleanios;
    this.ingreso=ingreso;
    this.estudios=estudios;
    this.salud=salud;
    this.alimentacion=alimentacion;
    this.vivienda=vivienda;
    this.servicios=servicios;
    this.cohesion=cohesion;
    this.carretera=carretera;
}
let folio=prompt("INGRESE EL FOLIO IDENTIFICADOR DE LA PERSONA A EVALUAR");
let cumpleanios=prompt("INGRESE EÑ AÑO DE NACIMIENTO");
let ingreso=prompt("xx");
let estudios=prompt("INGRESE SU ÚLTIMO GRADO DE ESTUDIOS");
let salud=prompt("¿CUENTA CON SEGURIDAD SOCIAL? \n en caso afirmativo, escriba 1 \n en caso negativo, escriba 0");
let alimentacion=prompt("xx");
let vivienda=prompt("xx");
let servicios=prompt("xx");
let cohesion=prompt("xx");
let carretera=prompt("xx");


const Usuario1=new Usuario(folio, cumpleanios, ingreso, estudios, salud, alimentacion, vivienda, servicios,cohesion,carretera);
console.log(Usuario1.folio);