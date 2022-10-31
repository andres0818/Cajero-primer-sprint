let efectivo = [
  {
    numBilletesDeCinco: 0,
    acomuladoBilletesDeCinco: 0,
  },
   {
    numBilletesDeDiez: 0,
    acomuladoBilletesDeDiez: 0,
  },
   {
    numBilletesDeVeinte: 0,
    acomuladoBilletesDeVeinte: 0,
  },
  {
    numBilletesDeCincuenta: 0,
    acomuladoBilletesDeCincuenta: 0,
  },
  {
    numBilletesDeCien: 0,
    acomuladoBilletesDeCien: 0,
  },
];

const CINCO=efectivo[0]
const DIEZ=efectivo[1]
const VEINTE=efectivo[2]
const CINCUENTA=efectivo[3]
const CIEN=efectivo[4]


//Validacion de usuarios
let usuarios = [
{
  nombre: "admin",
  numeroDeDocumento: 123,
  contraseña: 1,
  tipoDeUsuario: 1,
},
{
  nombre: "cliente",
  numeroDeDocumento: 000,
  contraseña: 2,
  tipoDeUsuario: 2,
},
];
const CLIENTE = usuarios[1];
const ADMIN = usuarios[0];
function validarDatos(){

validar = prompt("Ingrese el usuario").toLowerCase();

switch (validar) {
  case ADMIN.nombre:
    validarContraseñaAdministrador();
    break;
  case CLIENTE.nombre:
    validarContraseñaCliente();
    break;
  default:
      console.log("Usuario incorrecto")
      validarDatos()
      break;
}
}
validarDatos()

//funciones y validacion del administrador

function validarContraseñaAdministrador() {
let password = parseInt(prompt("Ingrese la contraseña"));
if (password == ADMIN.contraseña) {
  recargarCajero(); /*funcuion exclusiva del administrador*/
} else {
  alert("Contraseña incorrecta");
  location.reload();
}
}


//punto 3) Solicitar cantidad de billetes
function recargarCajero() {
  alert("Sr. admin vamos a recargar el cajero, por favor siga las indicaciones");

  (CINCO.numBilletesDeCinco += parseInt(prompt("Cuantos billetes de 5 va ingresar"))),
  (DIEZ.numBilletesDeDiez += parseInt(prompt("Cuantos billetes de 10 va ingresar"))),
  (VEINTE.numBilletesDeVeinte += parseInt(prompt("Cuantos billetes de 20 va ingresar"))),
  (CINCUENTA.numBilletesDeCincuenta += parseInt(prompt("Cuantos de 50 va ingresar"))),
  (CIEN.numBilletesDeCien += parseInt(prompt("Cuantos billetes de 100 va ingresar")));
  estadisticasCajero();
//punto 6) Una vez cargado el cajero solicitar de nuevo los usuarios y ejecutar funcion con base al tipo de usuario
  validarDatos()}

function estadisticasCajero() {
  CINCO.acomuladoBilletesDeCinco =CINCO.numBilletesDeCinco * 5; // aca lo que se va a hacer es totalizar la cantidad de efectivo que guarda cada tipo de billete
  DIEZ.acomuladoBilletesDeDiez=DIEZ.numBilletesDeDiez * 10; // aca lo que se va a hacer es totalizar la cantidad de efectivo que guarda cada tipo de billete
  VEINTE.acomuladoBilletesDeVeinte=VEINTE.numBilletesDeVeinte* 20; // aca lo que se va a hacer es totalizar la cantidad de efectivo que guarda cada tipo de billete
  CINCUENTA.acomuladoBilletesDeCincuenta=CINCUENTA.numBilletesDeCincuenta * 50; // aca lo que se va a hacer es totalizar la cantidad de efectivo que guarda cada tipo de billete
  CIEN.acomuladoBilletesDeCien=CIEN.numBilletesDeCien * 100; // aca lo que se va a hacer es totalizar la cantidad de efectivo que guarda cada tipo de billete
  let totalDinero = CINCO.acomuladoBilletesDeCinco + DIEZ.acomuladoBilletesDeDiez + VEINTE.acomuladoBilletesDeVeinte + CINCUENTA.acomuladoBilletesDeCincuenta + CIEN.acomuladoBilletesDeCien;
  console.table(efectivo);
  console.log("Total dinero en el cajero: ",totalDinero)

}


//Funciones y validacion del cliente


function validarContraseñaCliente() {
  let totalDinero = CINCO.acomuladoBilletesDeCinco + DIEZ.acomuladoBilletesDeDiez + VEINTE.acomuladoBilletesDeVeinte + CINCUENTA.acomuladoBilletesDeCincuenta + CIEN.acomuladoBilletesDeCien;
  let password2 = parseInt(prompt("Ingrese la contraseña"));
  if (password2 == CLIENTE.contraseña) {
      if(totalDinero>0){
          validarCantidadDineroRetirar(totalDinero);
      }
      else{//Punto 7) Cajero vacio => mensaje “Cajero en mantenimiento, vuelva pronto.” y reiniciar desde el inicio
          console.log("Cajero en mantenimiento, vuelva pronto.");
          validarDatos()
      }           
  }
  else{
      alert("Contraseña incorrecta")
      location.reload()
  }
}




function validarCantidadDineroRetirar(totalDinero) {
   
  let retiro = parseInt(prompt("Cuanto dinero va retirar"));
  console.log( totalDinero);
  //Operador ternario
  retiro <= totalDinero&&totalDinero>0? retirarDinero(retiro): console.log(`No hay suficiente dinero, hay ${totalDinero} dinero disponible`),validarDatos();
}



function retirarDinero(retiro) {
  let retiroBilleteCien = 0;
  let retiroBilleteCincuenta = 0;
  let retiroBilleteVeinte = 0;
  let retiroBilleteDiez = 0;
  let retiroBilleteCinco = 0;

  while (retiro > 0) {
    if (retiro >= 100 && CIEN.numBilletesDeCien > 0) {
      retiroBilleteCien += 1;
      CIEN.numBilletesDeCien -= 1;
      retiro -= 100;
    } else if (retiro >= 50 && CINCUENTA.numBilletesDeCincuenta > 0) {
      retiroBilleteCincuenta += 1;
      CINCUENTA.numBilletesDeCincuenta -= 1;
      retiro -= 50;
    } else if (retiro >= 20 && VEINTE.numBilletesDeVeinte > 0) {
      retiroBilleteVeinte += 1;
      VEINTE.numBilletesDeVeinte -= 1;
      retiro -= 20;
    } else if (retiro >= 10 && DIEZ.numBilletesDeDiez > 0) {
      retiroBilleteDiez += 1;
      DIEZ.numBilletesDeDiez -= 1;
      retiro -= 10;
    } else if (retiro >= 5 && CINCO.numBilletesDeCinco > 0) {
      retiroBilleteCinco += 1;
      CINCO.numBilletesDeCinco -= 1;
      retiro -= 5;
    }
  }
  console.log(`CANTIDAD RETIRADA\n\t
    Se retiraron ${retiroBilleteCien} de billetes de $100\n\t
    Se retiraron ${retiroBilleteCincuenta} de billetes de $50\n\t
    Se retiraron ${retiroBilleteVeinte} de billetes de $20\n\t
    Se retiraron ${retiroBilleteDiez} de billetes de $10\n\t
    Se retiraron ${retiroBilleteCinco} de billetes de $5
  `);
  // punto 9) Mostrar cuanto dinero quedo por cada denominacion
  CIEN.acomuladoBilletesDeCien -= 100 * retiroBilleteCien;
  CINCUENTA.acomuladoBilletesDeCincuenta -= 50 * retiroBilleteCincuenta;
  VEINTE.acomuladoBilletesDeVeinte -= 20 * retiroBilleteVeinte;
  DIEZ.acomuladoBilletesDeDiez -= 10 * retiroBilleteDiez;
  CINCO.acomuladoBilletesDeCinco -= 5 * retiroBilleteCinco;
  console.table(efectivo);
  let totalDinero = CINCO.acomuladoBilletesDeCinco + DIEZ.acomuladoBilletesDeDiez + VEINTE.acomuladoBilletesDeVeinte + CINCUENTA.acomuladoBilletesDeCincuenta + CIEN.acomuladoBilletesDeCien;
  console.log("Nuevo saldo disponible en el cajero",totalDinero),validarDatos();


  
}
