const trackMixin = {
  methods: {
    selectTrack() {
      if (!this.track.preview_url) {
        return;
      }

      //this.$emit("select", this.track.id); // emitimos un evento usando $emit de vue.js
      this.$store.commit("setTrack", this.track);
      this.$bus.$emit("set-track", this.track);
    }
  }
};

export default trackMixin;
