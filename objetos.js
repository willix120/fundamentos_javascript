var mustang = {
	marca: 'ford',
	anho: '2008',
	modelName: 'Mustang GT'
}

var camaro = {
	marca: 'Chevrolet',
	anho: '1969',
	modelName: 'Camaro SS'
}

var dodge = {
	marca: 'Dodge',
	anho: '2012',
	modelName: 'Dodge Charger'
}

function imprimirModelName({ modelName }) {
	console.log(`El modelo del vehiculo es ${ modelName }`)
}

function imprimirVehiculo(vehiculo) {
	var { modelName, anho } = vehiculo
	console.log(`El vehiculo es ${ modelName } del ${ anho }`)
}

function cambiarAnho(vehiculo, newYear) {
	vehiculo.anho = newYear
	console.log('Se ha cambiado el anho')
}

//imprimirModelName(camaro)
imprimirVehiculo(dodge)
imprimirVehiculo(camaro)
imprimirVehiculo(mustang)

//Cambiandole el anho
cambiarAnho(dodge, '2018')

//Reimprimo los datos del vehiculo
imprimirVehiculo(dodge)