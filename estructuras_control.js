const MAYORIA_DE_EDAD = 18

var williams = {
	nombre: 'Williams',
	apellido: 'Montes de oca',
	edad: 27
}

const mayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD
const esMenorDeEdad = ({ edad }) => !mayorDeEdad(edad)

const invertirNombre = ({ nombre }) => {
	nombreInvertido = ''
	for (var i = williams.nombre.length-1; i >= 0; i-- ) {
		nombreInvertido += nombre.charAt(i)
	}
	return nombreInvertido
}

console.log(`Mi nombre es ${ williams.nombre }`)
console.log(`Mi nombre invertido es ${ invertirNombre(williams) }`)

var numero = 0
while( numero <= 10 ) {
	//console.log(numero)
	numero++
}


var intentos = 0

const llueve = () => Math.random() < 0.25

do {
	intentos++
}while(!llueve())

var sufijo = ''

if(intentos===1){
	sufijo = 'vez'
}else{
	sufijo = 'veces'
}

console.log(`Fui a ver si estaba lloviendo ${ intentos } ${ sufijo }`)
