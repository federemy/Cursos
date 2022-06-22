<template>
  <div id="app">
    <section class="section">
      <pm-header></pm-header>
      <router-view></router-view>
      <pm-footer></pm-footer>
    </section>
  </div>
</template> 

<script>
import PmFooter from "@/components/layout/footer.vue"; // se registran componentes
import PmHeader from "@/components/layout/header.vue";

export default {
  name: "app",
  components: { PmFooter, PmHeader } //hay que declarar los componentes que importamos arriba para usarlos en el html
};
</script>

<style>
@import "./scss/main.scss";
.results {
  margin-top: 50px;
}
.is-active {
  border: 3px solid aqua;
}
</style>
