<template>
    <ul>
        <todo-item v-for="(todo, index) in todos"
        :key="index"
        :todo="todo">
        </todo-item>
    </ul>
</template>
<script>
export default {
  //aca exportamos el objeto que va a ser el componente
  name: 'todo-list',
  props: ['todos'],
  methods: {
      
  }
}
</script>

<style scoped>
    ul {
        list-style-type: none;
        color: red;
    }
</style>
