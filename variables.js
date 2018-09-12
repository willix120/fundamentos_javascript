console.log('Hola mundo en JavaScript!')

var mi_nombre = 'Williams', mi_apellido = 'Montes de oca'

console.log(`Hola! Mi nombre es ${ mi_nombre } ${ mi_apellido }`)

var cantidad_letras_nombre = mi_nombre.length
var cantidad_letras_apellido = mi_apellido.length

console.log(`La cantidad de letras de mi nombre es ${ cantidad_letras_nombre } y de mi apellido es ${ cantidad_letras_apellido }`)
console.log(`Mi nombre en minusculas es ${ mi_nombre.toLowerCase() } y mi nombre en mayusculas es ${ mi_nombre.toUpperCase() }`)

console.log(`La primera letra de mi nombre es: ${ mi_nombre.charAt(0) } y la ultima es: ${ mi_nombre.charAt(cantidad_letras_nombre-1) }`)
console.log(`Extraer parte de una cadena: ${ mi_nombre.substr(2,2) }`)

var numero1 = 15
var numero2 = 5
var sumaNumeros = numero1+numero2

console.log(`Numero 1: ${ numero1 }, numero 2: ${ numero2 }, la suma de los dos numeros es ${ sumaNumeros }`)

console.log(`Incremento de 5 puntos en el numero1: ${ numero1+=5 }`)
console.log(`Decremento de 1 en el numero2: ${ numero2-=1 }`)
console.log(`Vuelvo a sumar los numeros: ${ numero1+numero2 }`)
console.log(`Resto las variables: ${ numero1 - numero2 }`)

var producto1 = 55.4
var producto2 = 55.3
var producto3 = 33.3
var totalProductos = (producto1 + producto2 + producto3)*100/100

console.log(`Producto1 ${ producto1 }`)
console.log(`Producto2 ${ producto2 }`)
console.log(`Producto3 ${ producto3 }`)
console.log(`Total: ${ totalProductos.toFixed(2) }`)