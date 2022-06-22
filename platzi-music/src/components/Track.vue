<template>
  <div class="card" v-if="track && track.album">
    <div class="card-image">
      <figure class="image"></figure>
    </div>
    <div class="card-content">
      <div class="media">
        <figure class="image">
          <img :src="track.album.images[2].url " alt>
        </figure>
        <p class="title">{{track.name}}</p>
        <p class="subtitle">{{track.artists[0].name}}</p>
      </div>
      <div class="content">
        <small>{{track.duration_ms | ms-to-mm}}</small>
        <nav>
          <button @click="selectTrack">Play</button>
          <button @click="goToTrack(track.id)">Link</button>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
import trackMixin from "@/mixins/track";

export default {
  mixins: [trackMixin],

  props: {
    track: { type: Object, required: true }
  },
  methods: {
    goToTrack(id) {
      if (!this.track.preview_url) {
        return;
      }
      this.$router.push({ name: "track", params: { id } }); //se usa $router es para navegar programaticamente y acceder a funcionalidad de router, $route tiene info de la ruta especifica, parametros, url, etc
    }
  }
};
</script>

<style>
.columns {
  background-color: cadetblue;
  display: inline-block;
}
.column {
  display: inline-block;
  width: 25%;
  float: left;
  height: 250px;
  font-family: Arial;
  text-align: center;
}
</style>
