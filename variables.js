console.log('Hola mundo en JavaScript!')

var mi_nombre = 'Williams', mi_apellido = 'Montes de oca'

console.log(`Hola! Mi nombre es ${ mi_nombre } ${ mi_apellido }`)

var cantidad_letras_nombre = mi_nombre.length
var cantidad_letras_apellido = mi_apellido.length

console.log(`La cantidad de letras de mi nombre es ${ cantidad_letras_nombre } y de mi apellido es ${ cantidad_letras_apellido }`)
console.log(`Mi nombre en minusculas es ${ mi_nombre.toLowerCase() } y mi nombre en mayusculas es ${ mi_nombre.toUpperCase() }`)

console.log(`La primera letra de mi nombre es: ${ mi_nombre.charAt(0) } y la ultima es: ${ mi_nombre.charAt(cantidad_letras_nombre-1) }`)
console.log(`Extraer parte de una cadena: ${ mi_nombre.substr(2,2) }`)