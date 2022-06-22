 // template literals
console.log(`${key.toUpperCase()} -- ${value}`)
console.log(key + "--" + value)



function Componente({ backgroundColor }){
    return(<div className={`bg-color-${backgroundColor}`}>Hola</div>) // con esto le podes pasar variables dinamicas a un string 
}

// arrow functions

function nombreFuncion() {
    return "hola"
}
nombreFuncion()

//pasa a 

const funcionFlecha = () => "hola"
funcionFlecha()

//en react

function listaTareas() {
    return(
        <ul>
            {listado.map(elemento => (<li> {elemento.nombre }</li>))}
        </ul>
    )
}

//////////////////
//ternary operator

const auto = {
    brand: "tesla",
    modelo: "otro",
}

let modelo;
if(auto.modelo) {
    modelo = auto.modelo
}   else {
    modelo ="x"
} modelo

// o

let model = coche.model ? coche.model : "x" // operacion ternaria

model

// en react

function ListaTareas({tareas}) {
    return (
        <React.Fragment>
            {tareas.length ?(
                <ul>
                    {tareas.map.....}
                    </ul>
            ) : (
                <div>No hay tareas</div>
            )
            )}
            </React.Fragment>
    )
}

// arrays en js  - find some every includes map filter reduce

