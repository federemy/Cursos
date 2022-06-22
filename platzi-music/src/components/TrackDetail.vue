<template>
  <div class="column">
    <figure>
      <p class="pic" v-if="track && track.album">
        <img :src="track.album.images[2].url " alt>
      </p>
      <p>
        <a href class="button">
          <span @click="selectTrack">Play</span>
        </a>
      </p>
    </figure>
    <div class="column">
      <h1>{{trackTitle}}</h1>
      <article>
        <ul v-for="(v, k) in track" v-bind:key>
          <li>
            <strong>{{k}}:&nbsp;</strong>
            <span>{{v}}</span>
          </li>
        </ul>
        <nav>
          <a href></a>
        </nav>
      </article>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import trackMixin from "@/mixins/track";
//import trackService from "@/services/track";

export default {
  mixins: [trackMixin],

  computed: {
    ...mapState(["track"]),
    ...mapGetters(["trackTitle"])
  },
  // data() {
  //   return {
  //     track: {}
  //   };
  // },
  created() {
    const id = this.$route.params.id;

    if (!this.track || !this.track.id || this.track.id != id) {
      this.getTrackById({ id }).then(() => {
        console.log("Track loaded");
      });
    }

    // trackService.getById(id).then(res => {
    //   this.track = res;
    // });
  },
  methods: {
    ...mapActions(["getTrackById"])
  }
};
</script>