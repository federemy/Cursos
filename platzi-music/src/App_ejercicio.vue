<template>
  <div id="app">
    <p>{{name}}</p>
    <div v-for="task in tasks">Para {{task.title}} necesito {{task.time}} minutos.</div>

    <input type="text" placeholder="Add Tarea" v-model="newTask.title">
    <input type="number" placeholder="Add task" v-model="newTask.time">
    <button class="button is-info is-large" @click="addTask">Add Task</button>
    <button class="button is-info is-large" @click="cancel">Cancel</button>
    <p>Total hours: {{ totalTime }}</p>

    <ul style="list-style:none" v-if="tasks.length">
      <li v-for="(task, index) in tasks">
        <div>
          <button type="button" @click="removeTask(index)">
            <strong>X</strong>
          </button>
          <span>{{ newTask.title }} Time: {{ newTask.time }}</span>
        </div>
      </li>
    </ul>
    <div v-else>
      <strong>No tasks!</strong>
    </div>
    <div>
      <h2>¿Qué tipo de material es este?</h2>
      <p>
        Hola, espero que hasta aquí estés disfrutando el curso, recuerda que para dominar un lenguaje o framework de programación debes practicar. Justamente por esto he creado este material para ti, puedes hacerlo en tu entorno local o puedes hacerlo en alguna herramienta como
        <a href="http://codepen.io" target="_blank" rel="nofollow">codepen.io</a>. La idea es que practiques lo que has aprendido hasta este punto del curso, te invito a que revises el código de tus compañeros y que te animes a dar feedback así todos podrán ir creciendo.
      </p>
      <h2>Manipulación del DOM con Vue.js</h2>
      <h3>Este ejercicio consiste en practicar la funcionalidad de renderizado declarativo que provee Vue.js, para eso vamos a crear una pequeña aplicación web que nos permita hacer seguimiento de tareas utilizando el local storage del Browser. Así vamos a reforzar los conceptos básicos que nos ofrece Vue.js para manipular e interactuar con el DOM.</h3>
      <p>Ejercicio:</p>
      <ul>
        <li>
          <p>Crear dentro de data una propiedad “name” de tipo String y una propiedad “tasks” de tipo de Array.</p>
        </li>
        <li>
          <p>Agregar una expresión para mostrar el valor de name y utilizar la directiva apropiada para para mostrar en una lista cada uno de los elementos dentro de task. Cada “task” es un objeto con una propiedad “title” y otra “time”. Agreguemos las expresiones necesarias para que en cada tarea podamos visualizar ambas propiedades.</p>
        </li>
        <li>
          <p>Agregar funcionalidad para crear una nueva tarea:</p>
          <ul>
            <li>
              <p>Vamos a necesitar una nueva propiedad llamada “newTask” que sea un Object. Dentro de este objeto también agregamos una propiedad “tilte” de tipo String y una propiedad “time” de tipo Number. Recuerda inicializar las propiedades con valores default.</p>
            </li>
            <li>
              <p>Vamos a crear un método llamado “addTask” que agregue una nueva tarea al array “tasks”. Una vez agregada también va a reiniciar los valores dentro de “newTaks”. Ten en cuenta que antes de agregar la propiedad debemos chequear con los valores de “newTask.title” y “newTask.time” existan (sean distintos de “falsy”). Por otro lado es importante que cada elemento nuevo que agreguemos al array de “tasks” sea un objeto nuevo y no la instancia de “newTask”.</p>
            </li>
            <li>
              <p>Vamos a agregar el HTML, para esto necesitamos dos “inputs” y un “button”. También debemos agregar las directivas correspondientes para enlazar el código con la vista.</p>
            </li>
            <li>
              <p>Creamos también una funcionalidad para cancelar, para eso debemos crear un método llamado “cancel” que simplemente reinicie los valores de las propiedades de newTask. Recordemos agregar un button de HTML donde enlazar este nuevo método.</p>
            </li>
            <li>
              <p>Es momento de saber cuantas horas llevamos trabajadas, para eso vamos a crear una computed property llamada “totalTime” donde se recorran todas las tareas y se calculo el total del tiempo trabajado. También vamos agregar un elemento HTML con la expresión necesaria para visualizar la propiedad.</p>
            </li>
            <li>
              <p>Debemos integrar la app con el local storage del browser. Dentro del metodo “addTask”, guardamos toda la lista de tareas en dicho storage usando este metodo: “localStorage.setItem(‘tasks’, JSON.stringify(this.tasks))”.</p>
            </li>
            <li>
              <p>Guardando las tareas en el browser podemos persistir la información aunque estemos cerrando o refrescando la página. Además, al momento de crearse el componente, debemos leer esta información para poder cargar la lista de tareas. Para eso dentro del hook “created”, escribimos el siguiente código: “this.tasks = JSON.parse(localStorage.getItem(‘tasks’)) || []”</p>
            </li>
            <li>
              <p>Lo último que nos queda es poder eliminar las tareas que ya no queremos. Para eso vamos a crear un método que se llame “removeTask”. Este método debe recibir por parámetro el indice de la tarea y podemos utilizar ese indice (en conjunto con el método “splice” de Array) para eliminar el elemento. Recordemos que tendremos que agregar un botón por cada tarea y cada uno de estos se encarga de llamar al método “removeTask” enviando por parámetro el indice correspondiente. Recordemos invocar la funcionalidad que ya pusimos en “addTask”, para actualizar el local storage del Browser.</p>
            </li>
            <li>
              <p>Por último vamos a mejorar la UI, cuando no haya tareas podemos mostrar un mensaje que indica que no hay ninguna tarea cargada y por otro lado ocultar el lista vacía.</p>
            </li>
          </ul>
        </li>
      </ul>
      <p>
        Si en algún punto del ejercicio te sientes perdido, te dejo la versión que yo hice para que puedas consultarla en cualquier momento:
        <a
          href="https://codepen.io/ianaya89/pen/NgEeVO"
          target="_blank"
          rel="nofollow"
        >https://codepen.io/ianaya89/pen/NgEeVO</a>
      </p>
    </div>
  </div>
</template> 

<script>
export default {
  name: "app",
  data() {
    return {
      name: "app tasks!",
      tasks: [],
      newTask: { title: "", time: 0 } // asi se declara un nuevo objeto para el array tasks
    };
  },
  created() {
    // esto es un hook, permite incluir acciones antes y después de que un componente se encuentre en un estado determinado / https://elabismodenull.wordpress.com/2017/05/05/vuejs-el-ciclo-de-vida-de-un-componente/
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  },

  methods: {
    addTask() {
      //este metodo hay que ubicarlo en el click del boton para que realice esta accion
      if (this.newTask.title != "" && this.newTask.time > 0) {
        // acá tuve que agregar this

        let row = {
          //esto lo saqué del ejercicio, crea la variable para lo de abajo
          title: this.newTask.title,
          time: this.newTask.time
        };

        // Llenamos el array tasks[] con la data de title y time.
        this.tasks.push(row); // con push llenas el array

        // Almacenamos el array en localStorage
        // El método JSON.stringify() convierte un valor dado en javascript a una cadena  JSON
        localStorage.setItem("tasks", JSON.stringify(this.tasks));

        //Limpiamos los input title y time despues de Agregarlos al array tasks[]
        this.newTask.title = ""; // el v-model hay que enlazarlo al elemento donde va la variable que se ingresa
        this.newTask.time = 0;
      } else {
        alert("Los campos Tarea y Tiempo son requeridos");
      }
    },
    removeTask(index) {
      console.log(index);
      this.tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    cancel() {
      this.newTask = {};
    }
  },
  computed: {
    totalTime() {
      let time = 0;
      this.tasks.forEach(function(task) {
        time += parseInt(task.time);
      });
      return time;
    }
  }
};
</script>

<style>
</style>