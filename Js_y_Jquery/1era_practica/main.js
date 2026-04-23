// 1. Un estudiante realiza 4 exámenes, calcular el promedio de estos.
/*const examen1 = 12;
const examen2 = 15;
const examen3 = 18;
const examen4 = 10;

const suma = examen1 + examen2 + examen3 + examen4;
console.log(suma / 4);*/

//2. Calcular el área de un rectángulo
/*const base = 10;
const altura = 5;
const area = base * altura;
console.log(area)*/

//3. Calcular el área de un triángulo.
/*const base = 20;
const altura = 12;
const area = (base * altura) / 2;
console.log(area)*/

//4. Calcular el área de una circunferencia. (π = 3.14)
/*const radio = 5;
const area = 3.14 * radio * radio;
console.log(area)*/

//5. Haya el promedio de todos los elementos del arreglo.
/* const arreglo = [21, 4, 93, 33]
const suma = arreglo[0] + arreglo[1] + arreglo[2] + arreglo[3]
const promedio = suma / arreglo.length
console.log(promedio)*/

//6. De un arreglo de números, retornar la suma de todos los números pares. 
/* const arreglo = [1, 4, 13, 22, 40, 5]
let sumaPares = 0;
for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
        sumaPares += arreglo[i];
    }
}
console.log(sumaPares);*/

//7. Escriba un programa en JavaScript para mostrar el nombre del libro y el nombre del autor de los libros que tengan el estado de lectura “true”
const library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        Status: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        Status: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        Status: false,
    }
];

for (let i = 0; i < library.length; i++)

