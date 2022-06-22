function createGodzilla (color, weight, powers) {

}

//cuando van cambiando los parametros le vamso a pasar un objeto con los parametros


createGodzilla('blue', 200,['lightning'])

///////////////////

function createGodzilla({color, material, weight = 200, sound, powers}) {

}

const godzillaParams = {
    color: 'blue',
    material: 'plastic',
    sound: 'roar',
    powers: ['lightning', 'nuclear bomb']
}

createGodzilla(godzillaParams)