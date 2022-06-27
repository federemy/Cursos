// https://github.com/soyHenry/Prep-Course/blob/main/04-JS-III/homework/homework.js

// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  console.log(array[0])
}
devolverPrimerElemento(array = [1,2,3,4])


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  console.log(array.slice(-1))
}
  devolverUltimoElemento(array = [1,2,3,4])


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var largo = [4,2,4,6,7,8].length
  console.log(largo)
}
console.log(obtenerLargoDelArray())


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var arreglo = [1,2,3,4]
  var array = arreglo.map(num => num + 1 )
  console.log(array)
}
incrementarPorUno()


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  var array = [1,2,3,4]
  elemento = 5
  array.push(elemento)
  console.log(array)
}
console.log(agregarItemAlFinalDelArray())


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  var array = [1,2,3,4]
  elemento = 5
  array.unshift(elemento)
  console.log(array)
}
console.log(agregarItemAlComienzoDelArray())



function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  palabras = ['hola',' ', 'como',' ', 'andas']
  frase = palabras.toString()

  frase2 = palabras[0] + palabras[1] + palabras[2] + palabras[3] + palabras[4]
  console.log(frase2)


}
console.log(dePalabrasAFrase())

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  var array = ['San', 'Lorenzo', 'Almagro', 'Boedo']
  var elemento = 'Lorenzo'
  if(array.includes(elemento)) {
    return 'true'
  } else {
    return 'false'
  }
}
console.log(arrayContiene())


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  numeros = [1,2,3,4]
  suma = numeros[0] + numeros[1] + numeros[2] + numeros[3]
  console.log(suma)
}
agregarNumeros()



function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var resultadosTest = [1,2,3];
  var result1 = 0;

  for (var number of resultadosTest) {
      result1 += number;
  }
  average = result1 / resultadosTest.length;
  console.log(average);


}
promedioResultadosTest()


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numeros = [1,2,23,4,5,6,7];

console.log(Math.max(...numeros));

}
numeroMasGrande()

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var multiplicados = 1;
  var i = 0;
  if (arguments.length > 0){
     while (arguments[i] > 0) {
      multiplicados *= arguments[i];
      i++; 
  }
  return multiplicados;
  
  }else if(arguments === 0){
    return 0;
  }
  return '';
}
console.log(multiplicarArgumentos(3, 5, 7))
console.log(multiplicarArgumentos())

function cuentoElementos(){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var i = 0
  const array = [3, 12, 45, 7];
  const mas18 = array.filter(i => i > 10)

  total = mas18.length
  console.log(total)
}
cuentoElementos()


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  var numeroDeDia = 7

    switch(numeroDeDia) {
        case 1:
          console.log('domingo');
          break;
        case 2:
          console.log('lunes');
          break;
        case 3:
          console.log('martes');
          break;
        case 4:
          console.log('miercoles');
          break;
        case 5:
          console.log('jueves');
          break;
        case 6:
          console.log('viernes');
          break;
        case 10:
          console.log('sabado');
          break;
    }
  if(numeroDeDia == 1 || numeroDeDia == 7) {
    console.log(numeroDeDia)
    return 'Es fin de semana'
  } else {
    return 'Es dia laboral'
  }
  
} 
diaDeLaSemana()
  



function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  n = 9
  empieza = n.toString()
  empieza9 = empieza.startsWith(9)
  if(empieza == 9) {
    return true
  } else {
    return false
  }
  
  
}
empiezaConNueve(console.log())


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  arreglo = [1,1]

  const todoIgual = arreglo => arreglo.every(v => v === arreglo[0]);

  console.log(todoIgual(arreglo))
  
} 
todosIguales()


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  array = ['junio','Marzo','Enero','Noviembre','febrero']
  const nuevoArray=['Marzo','Noviembre','Enero']

  let findEnero
  let findMarzo
  let findNoviembre
  array.includes('Enero')?findEnero=true:findEnero=false
  array.includes('Marzo')?findMarzo=true:findMarzo=false
  array.includes('Noviembre')?findNoviembre=true:findNoviembre=false;
  return nuevoArray && findEnero===true&&findMarzo===true&&findNoviembre===true?nuevoArray:"No se encontraron los meses pedidos";
}
mesesDelAño()


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  array = [1,2,3,4,5,6,7,8,123,109,200,100,99]
  i = 0;
  
  const mas100 = array.filter(i => i > 100)
  return mas100

}
mayorACien()


  function comprobarBreak(x,nuintera) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
    var i = x;
    var j = 0;
    var suma = 0;
    var array = [];

    while (i < 10) {

    var suma = i += 2;   
    array.push(j);
    //array.push(suma);
    
      if(j == nuintera){
        array.push('Se interrumpió la ejecución');
      break;
      }
    j++; 
    }
    return array;
  }

  console.log(comprobarBreak(0,4));
    

breakStatement()


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};