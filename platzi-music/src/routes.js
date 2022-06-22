import Search from "@/components/Search.vue";
import About from "@/components/About.vue";
import TrackDetail from "@/components/TrackDetail.vue";

const routes = [
  // aca ponemos las rutas que vamos a usar
  // lo importante es declarar el path y asociarla con un componente existente
  { path: "/search", component: Search, name: "search" },
  { path: "/about", component: About, name: "about" },
  { path: "/track/:id", component: TrackDetail, name: "track" } //acá el valor es dinamico
];

export default routes;
