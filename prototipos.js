function Persona (nombre, apellido, altura) {
	this.nombre = nombre
	this.apellido = apellido
	this.altura = altura
}

Persona.prototype.saludar = function () {
	console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
	if ( this.altura > 1.8 )
		console.log(`Soy alto! (${ this.altura })`)
	else
		console.log(`Soy bajo! (${ this.altura })`)
}

var williams = new Persona('Williams', 'Montes de oca','1.73')
var mayelin = new Persona('Mayelin', 'Mosquera','1.62')

williams.saludar()
williams.soyAlto()
mayelin.saludar()
mayelin.soyAlto()