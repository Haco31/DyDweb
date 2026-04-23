// Ejercicio 02
// solicitar al usuario un numero y determinar si es divisible entre dos o no.
// 4 / 2 = 2 -> residuo 0
// 10 / 2 = 5 -> residuo 0
// 13 / 2 = 6 -> residuo 1

// let numero = Number(prompt("Ingrese un numero diferente de cero y positivo"));
// // console.log(numero);
// if (numero % 2 === 0) {
//   //      0  === 0
//   //      0 === 0
//   //      1 === 0
//   // console.log("El numero es divisible entre 2");
//   console.log("El numero " + numero + " es divisible entre 2");
// } else {
//   console.log("No es divisible entre 2");
// }

// ejercicio 03
// solicitar al usuario que ingrese dos numeros y mostrar cual de los dos es menor. no considerar el caso en que ambos numeros son iguales.

// let num1 = Number(prompt("Ingrese el primer numero"));
// let num2 = Number(prompt("Ingrese el segundo numero"));
// // num1 > num2 o num2 > num1
// if (num1 > num2) {
//   // console.log("El numero " + num1 + " es mayor que " + num2);
//   console.log(`El numero ${num1} es mayor que ${num2}`);
// } else {
//   console.log("El numero " + num2 + " es mayor que " + num1);
// }

// ejercicio04
// dado un numero del 1 al 4, identificar la estacion del anho correspondiente.

// let numero = Number(prompt("Introduce un numero del 1 al 4:")); //1, 2, 3, 4
// let estacion;
// // console.log(estacion);

// switch (numero) {
//   case 1:
//     estacion = "Primavera";
//     console.log(`La estacion es ${estacion}`);
//     break;

//   case 2:
//     estacion = "Verano";
//     console.log(`La estacion es ${estacion}`);
//     break;

//   case 3:
//     estacion = "Otonho";
//     console.log(`La estacion es ${estacion}`);
//     break;

//   case 4:
//     estacion = "Invierno";
//     console.log(`La estacion es ${estacion}`);
//     break;

//   default:
//     estacion = "numero invalido, por favor ingresa un numero del 1 al 4";
//     console.log(estacion);
// }

// ejercicio05
// pide al vendedor el precio de un producto y su categoria (A, B o C). aplica un descuento del 10% para la categoria A, 15% para la B y 20% para la C. muestra el precio final.

// let precio = Number(prompt("introduce el precio del producto:"));
// let categoria = prompt(
//   "introduce la categoria del producto A, B o C:",
// ).toUpperCase();
// // toUpperCase() convierte el texto a mayuscula
// let descuento = 0;

// switch (categoria) {
//   case "A":
//     descuento = 0.1;
//     break;

//   case "B":
//     descuento = 0.15;
//     break;

//   case "C":
//     descuento = 0.2;
//     break;

//   default:
//     console.log("Categoria no valida, no se aplicara descuento");
// }

// let precioFinal = precio - precio * descuento;
// console.log(`El precio final es: ${precioFinal} soles`);
