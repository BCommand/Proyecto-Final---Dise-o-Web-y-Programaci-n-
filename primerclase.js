var textoA = "Bienvenido/a";
let textoB = "a Vivir Hoy";

let resultadoSuma = textoA + textoB;

alert("¡Bienvenido a Vivir Hoy!");

console.log("Bienvenida a la página");

let paisIngresado = prompt("Ingrese un Pais");

console.log("El pais ingresado es:", paisIngresado);

let unPais = "Argentina";
let otroPais = "Brasil";
let muyLejos = "China";

if (paisIngresado == unPais) {
  console.log("ofrecer promos en destinos nacionales");

  alert("¡Espectacular! Tenemos un 20% en vuelos nacionales");
} else {
  alert(" Excelente elección, tenemos packs para 2022 disponibles ");
}

if (paisIngresado == unPais) {
  console.log("ofrecer promos en destinos nacionales");

  alert("¡Espectacular! Tenemos un 20% en vuelos nacionales");
} else {
  alert(" Excelente elección, tenemos packs para 2022 disponibles ");
}

if (paisIngresado == otroPais) {
  console.log("Ofrecer tours por Rio de Janeiro");

  alert(
    "Se aproximan los famosos carnavales de Rio de Janeiro, no te lo pierdas!"
  );
}

if (paisIngresado == muyLejos) {
  console.log("China no está incluido");

  alert("Lo sentimos, China no está incluido en nuestos servicios");
}

//Pasajeros, qué pack está disponible según las personas que viajan

let pasajero = prompt("¿Cuántas personas viajan?");

switch (pasajero) {
  case "2":
    alert("Accede accede a nuestro Pack Gold");
    break;
  case "3":
    alert("Accede a nuestro Pack Platinum");
    break;
  case "4":
    alert("Accedé a nuestro Pack Family and Friends");
    break;
  case "5":
    alert("Accede a nuestro Pack Party y divertite al máximo");
    break;
}


class Viaje {


  Vuelo = { pais: "Inglaterra", idioma: "Inglés", moneda: "Libra" };
 
  constructor(pais, idioma, moneda ) {
    this.pais = pais;
    this.idioma = idioma;
    this.moneda = moneda;
  }
      console.log(Vuelo.pais);
      console.log(Vuelo.idioma);
      console.log(Vuelo.moneda);
}
  set pais(Inglaterra) {
    this.pais = Inglaterra;
  }
  set idioma(Ingles) {
    this.idioma = Ingles;
  }
  set moneda(Libra) {
    this.moneda = Libra;
  }

  get pais() {
    return this.pais;
  }
  get idioma() {
    return this.idioma;
  }
  get moneda() {
    return this.moneda;
  }


function Vuelo(francia, frances, euro) {
  this.pais = pais;
  this.idioma = idioma;
  this.moneda = moneda;

  const Vuelo1 = new Viaje("Vuelo1", "Inglés", "Libra");
  console.log(`${Inglaterra} uno de los destinos más buscados`);
}
    


/*
const destino = {
  pais: ['Francia','Inglaterra'],
  idioma: ['Frances', 'Ingles'],
  moneda: ['Euro','Libra'],
  pais1: {pais: 'Francia', idioma:'Frances' moneda: 'Euro'}
  
};

class Pais {
  constructor(pais, idioma, moneda){
    this.pais = pais;
    this.idioma = idioma;
    this.moneda = moneda;
    
  }
}
class Destino {
  constructor(pais, idioma, moneda){
    this.Francia = pais;
    this.idioma = idioma;
    this.moneda = moneda;

  }
}
getFrancia() {
  return this.francia;
}

obtenerIdioma() {
  return this.idioma 
}

*/ /*
let destino = "Inglaterra";
  let idioma = "Inglés";
  let moneda = "Libra";

function (pais, idioma, moneda) {
  this.destino = Inglaterra;
  this.idioma = Inglés;
  this.moneda = Libra;
  this.comprar = function () {
    console.log("Vamos a " + this.destino);
  };
}

*/
