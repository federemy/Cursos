// No cambies los nombres de las funciones.
function Usuario(usuario, nombre, email, password) {
    this.usuario = usuario,
    this.nombre = nombre,
    this.email = email,
    this.password = password
}
function crearUsuario(usuario, nombre, email, password) {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:


  Usuario.prototype.saludar = function(){
      return console.log(`Hola mi nombre es ${this.usuario}`)
  }
  
  const thor = new Usuario('thor', 'thor', 'thor@gmail.com','gato123')

  // Usuario.prototype.usuario = 'thor'
  // Usuario.prototype.nombre = 'thor el gato'
  // Usuario.prototype.email = 'thor@gmail.com'
  // Usuario.prototype.password = 'gato123'

  // console.log(Usuario.prototype.usuario)
  // console.log(Usuario.prototype.nombre)
  // console.log(Usuario.prototype.email)
  // console.log(Usuario.prototype.password)

  return thor.saludar()

}
crearUsuario()


function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Usuario.prototype.saludar = function() {
    return "hello world!"
  }

}
agregarMetodoPrototype(Usuario)

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"

  String.prototype.reverse = function() {

    var x = this.length;
    var cadena = "";
    while (x>=0) {
      cadena = cadena + this.charAt(x);
      x--;
    }
    return cadena;
    
  };
var x = new String("Hola");
console.log("La cadena " + x + " invertida es " + x.reverse());
}
agregarStringInvertida()
// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      // Crea el constructor:
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.domicilio = domicilio  
    }
    detalle() {
      return {nombre: 'Fede', apellido: 'Re', edad: 35, domicilio: 'OyG 1699' }
    }
  }
   


function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  var thor = new Persona('Thor', 'Gatoto', 7, 'OyG 1688')
  return console.log(thor)
}
crearInstanciaPersona()
  
function agregarMetodo(nombre, edad) {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  Persona.prototype.datos = function() {
    return `Su nombre es ${this.nombre} y tiene ${this.edad} años`
  }
  var juan = new Persona('juan', '','23')
  console.log(juan.datos())
}

agregarMetodo()

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};