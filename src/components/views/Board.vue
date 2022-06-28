<template>
  <section>
      <h3><span>Mis paneles</span>->{{name}}</h3>
      <input type="text" 
        placeholder="Add a list" 
        v-model="listName" 
        @keyup.enter="add()"
        >
        <div class="container">
            <column 
            v-for="(list, index) in boardList" 
            :key="index" 
            :listId="list.id" 
            :name="list.name"
        >
            
            </column>
        </div>
  </section>
</template>

<script>
import Column from '@/components/Column'

export default {
  name: 'board.view',
  components: {Column},
  props: {
      name: String,
      id: String
  },
  data () {
    return {
        listName: '',
        boardList: [
            {id: '1', name: 'Todo'},
            {id: '2', name: 'Doing'}
        ]
    }
  },
  methods: {
      add () {
          this.boardList.push({name: this.listName})

      }
  }
}
</script>

<style scoped>
section {
    text-align: left;
}
h3 {
    color: #37474f;
    text-align: left;
    margin: 1.5rem
}
h3 span {
    color: #546e7a
}
input {
    box-sizing: border-box;
    background-color: #546E7A;
    border: 2px solid #546E7A;
    border-radius: 5px;
    font-size: 1.1rem;
    outline: 0;
    padding: 0.5rem;
    transition: all 600ms ease
}
input:focus, input:active {
    background-color: white;
    color: black
}
input::placeholder {
    color: white
}
</style>
