<template>
    <header>
        <span class="title">vue Trello</span>
        <router-link class="btn-header" to="/">Mis paneles></router-link>
    </header>
</template>

<script>
export default {
  name: 'app-header'
}
</script>


<style scoped>
header {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: #37474f;
  margin: 0;
  padding: 1rem;

}  
.title {
      align-self: center;
      color: #eceff1;
      font-size: 1.2rem;
      font-weight: bold;
      margin-right: 1rem;
  }
.btn-header {
    background-color: #455A65;
    border: none;
    border-radius: 5px;
    color: #d4d4d4;
    cursor: pointer;
    text-decoration: none;
    padding: 0.5rem;
    margin: 0 0.5rem;
    box-shadow: 0 0 0 0.5px rgba(50,50,93,.03)
}
</style>
