// filtrar numero negativos sin usar metodos

let array = [-3, 2, -2, 5, 0];
// inide      0  1   2  3  4  
// número de elementos =array.length = 5
// console.log(array[0])
let positivos = []
let negativos = []

for(let i=0; i<array.length; i++){
    // i=0
    if(array[i] > 0){
        // array[0] = -3
        // -3 > 0 = false
        positivos.push(array[i])
    } else if (array[i] < 0){
        negativos.push(array[i]);
    }
    console.log(positivos)
    console.log(negativos)
}

// ejer02
// encontrar el numero maximo de un arreglo
let numeros = [1, 8, 3, 9, 5];
// indice      0  1  2  3  4
// numero de elementos = 5
let maximo = numeros[0]; //1
for (let i = 0; i < numeros.length; i++) {
  // i=0
  // i=1
  // i=2
  // i=3
  // i=4
  if (numeros[i] > maximo) {
    // 1 > 1, i++
    // 8 > 1
    // maximo = numeros[1] //8
    // i++
    // 3 > 8, i++
    // 9 > 8
    // maximo = numeros[3] //9
    // i++
    // 5 > 9
    maximo = numeros[i];
  }
}
console.log(maximo);

// ejerc03
// contar cuantas palabras hay en una cadena de texto.
let texto = "Hola mundo, ¿como estas? goku";
 
// console.log(texto[0]);
// console.log(texto[1]);
// console.log(texto[2]);
// console.log(texto[3]);
// console.log(texto[4]);
let contadorPalabras = 1;
for (let i = 0; i < texto.length; i++) {
  if (texto[i] === " ") {
    contadorPalabras = contadorPalabras + 1;
    // cont = 1 + 1 = 2
    // conta = 2 + 1 = 3
    // cont = 3 + 1 = 4
  }
}
console.log(contadorPalabras);

