<template>
  <router-link
    class="board-card"
    :to="{name: 'board',params: {name, id}}"
  >
    <span class="board-card-title">{{name}}</span>
  </router-link>
</template>

<script>
export default {
  name: 'board-card',
  props: {
    id: String,
    name: String
  }
}
</script>

<style scoped>
.board-card {
  background-color: #546e78;
  box-shadow: 0 0 0 0.5px black;
  box-sizing: border-box;
  border-radius: 5px;
  color: #fafafa;
  margin: 0.5rem 1.5rem;
  padding: 1rem;
  text-align: left;

}
.board-card .title {
  font-size: 1.2rem
}
.board-card:hover{
  background-color: black;
  font-weight: bold
}
@media screen and(min-width: 600px) {
  width: 33%
}
@media screen and(min-width: 1024) {
  width: 250px
}
</style>
