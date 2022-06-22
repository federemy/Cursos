<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>PlatziMusic</h1>
    <select>
      <option
        v-for="country in countries"
        :value="country.value"
        :key="country.value"
      >{{country.name}}</option>
    </select>
    <spinner v-show="loading"></spinner>
    <ul>
      <artist v-for="artist in artists" :artist="artist" :key="artist.mbid"></artist>
    </ul>
  </div>
</template>

<script>
import Artist from "./components/Artist.vue";
import Spinner from "./components/Spinner.vue";
import getArtists from "./api";

export default {
  name: "app",
  data() {
    return {
      artists: [],
      countries: [
        { name: "Argentina", value: "argentina" },
        { name: "Colombia", value: "colombia" },
        { name: "España", value: "spain" }
      ],
      selectedCountry: "argentina",
      loading: true
    };
  },
  components: {
    Artist,
    Spinner
  },
  methods: {
    refreshArtists() {
      const self = this;
      this.loading = true;
      this.artists = [];
      getArtists(this.selectedCountry).then(function(artists) {
        self.loading = false;
        self.artists = artists;
      });
    }
  },
  mounted() {
    this.refreshArtists();
  },
  watch: {
    selectedCountry() {
      this.refreshArtists();
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
