import platziMusicService from "./platzi-music";
// la idea es que interacture con platzimusic y obtener canciones
const trackService = {};

trackService.search = function(q) {
  // la q es algo de query
  const type = "track";

  return platziMusicService
    .get("/search", {
      params: { q, type }
    }) //get es un metodo de TRAE, ponemos lo que queremos pasar nada mas, ejecuta el endpoint search en platzi music
    .then(res => res.data); //.then nos permite manejar el estado de success luego de la promesa
};

trackService.getById = function(id) {
  return platziMusicService.get(`/tracks/${id}`).then(res => res.data);
};
export default trackService;

// creamos el archivo platzimusic que nos permite centralizar las llamadas a la api,
// despues creamos el servicio track que tiene un metodo que interactua con la api de platzi
// para poder buscar canciones, ahora vamos a integrar el track service con nuestros componentes
