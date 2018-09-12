function sumar(numero1, numero2) {
	return numero1 + numero2
}

function sumarDetalladoNumeros(numero1, numero2) {
	return `La suma de los numeros ${numero1} + ${numero2} = ${ sumar(numero1, numero2) }`
}

console.log(sumarDetalladoNumeros(12, 25))