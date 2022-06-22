<template>
  <div class="content player" v-if="track && track.album">
    <!-- arriba le estamos diciendo que este elemento no se va a mostrar hasta que el objeto track exista, tenga un valor y el album de track tambien tenga un valor -->

    <p>
      <img :src="track.album.images[2].url " alt>
    </p>
    <p>
      <strong>{{track.name}}</strong>
      <small>{{track.duration_ms | ms-to-mm}}</small>
    </p>
    <p>
      <audio :src="track.preview_url" controls></audio>
    </p>
  </div>
</template>

<script>
/*export default {
  data() {
    return {
      track: {}
    };
  },
  created() {
    this.$bus.$on("set-track", track => {
      this.track = track;
    });
  } esto lo borramos porque vamos a usar el store 
};*/

import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["track"])
  }
};
</script>
