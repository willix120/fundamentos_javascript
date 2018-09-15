var arreglo = ['cadena de texto', 123, { name: 'Williams' }, 321]

console.log(`Contenido del array es: ${ arreglo }`)

console.log(`Accediendo a la primera posicion del array: ${ arreglo[0] }`)

for (var i = 0; i < arreglo.length; i++) {
	console.log(arreglo[i])
}

const condicionFiltrado = (elemento) => typeof(elemento) === 'number'

pruebaArregloFiltrado = arreglo.filter(condicionFiltrado)
console.log(`Filtrado de elementos del arreglo que son numericos: ${ pruebaArregloFiltrado }`)

const imprimirValores = elemento => {
	console.log(elemento)
}

arreglo.map(imprimirValores)

var numeros = [50,32,84,51,25,68,94,87,52,42,32]

const sumar = (acumulador, numero) => acumulador + numero

var sumaTotal = numeros.reduce(sumar, 0)

console.log(`La suma total de todos los numeros en el arreglo es: ${ sumaTotal }`)