/* Disponible desde ES 2015, sin embargo siguen siendo prototipos */

class Persona {
	constructor (nombre, apellido, altura) {
		this.nombre = nombre
		this.apellido = apellido
		this.altura = altura
	}

	saludar() {
		console.log(`Hola mi nombre es ${ this.nombre } ${ this.apellido }`)
	}

	soyAlto() {
		return this.altura > 1.8
	}
}

class Desarrollador extends Persona {
	constructor(nombre, apellido, altura) {
		super(nombre, apellido, altura)
	}

	saludar() {
		console.log(`Hola mi nombre es ${ this.nombre } ${ this.apellido } y soy Desarrollador/a`)
	}
}
