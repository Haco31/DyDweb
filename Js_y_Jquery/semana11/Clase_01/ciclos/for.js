// Ciclo For
// repite un bloque de codigo mientras se cumpla la condicion

// Ejr01
for (let i = 0; i < 5; i++) {
  // console.log(i);
  // 0
  // 1
  // 2
  // 3
  // 4
}

// ejr02
// immprimir la tabla de multtiplicar del 5
for (let i = 1; i <= 10; i++) {
  // i=1, 5 x 1 = 5
  // i=2, 5 x 2 = 10
  // i=3, 5 x 3 = 15..
  // console.log(5 * i);
  // console.log(`5 x ${i} = ${5 * i}`);
}

// ejer03
const nombres = ["carlos", "cristian", "estefania", "erica", "manuel"];
// indice           0           1           2          3         4

// console.log(nombres.length); //5
// console.log(nombres[0]);
// console.log(nombres[1]);
// console.log(nombres[2]);
// console.log(nombres[3]);
// console.log(nombres[4]);

// for (let i = 0; i < 5; i++) {
//   console.log(nombres[i]);
// }
for (let i = 0; i < nombres.length; i++) {
  // console.log(nombres[i]);
}

// ejerc04
const carrito = [
  { nombre: "monitor", precio: 500 }, //0
  { nombre: "television", precio: 100 }, //1
  { nombre: "tablet", precio: 200 }, //2
  { nombre: "teclado", precio: 300 }, //3
  { nombre: "celular", precio: 400 }, //4
  { nombre: "audifonos", precio: 700 }, //5
];
// console.log(carrito.length); //6
// console.log(carrito[3]);
// console.log(carrito[3].nombre);

for (let i = 0; i < carrito.length; i++) {
  // console.log(carrito[i].nombre);
}

// ejer05
// calcular la suma de los numeros del 1 al 100
let suma = 0;
for (let i = 1; i <= 100; i++) {
  //  suma = 1 + 2 + 3 + 4 + 5 + 6 + 7+ ......+99+100
  //  i=1, suma = 1
  // i=2, suma = suma + i = 1 + 2 = 3
  // i=3, suma = suma + i = 3 + 3 = 6
  // i=4, suma = suma + i = 6 + 4 = 10
  // i=5, suma = suma + i = 10 + 5 = 15 ...
  // suma = suma + i;
  suma += i;
}
console.log(suma);
