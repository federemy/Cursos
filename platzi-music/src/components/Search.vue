<template>
  <main>
    <transition name="move"></transition>
    <section class="section">
      <pm-notification :typeNotification="hasData" v-show="showNotification">
        <p v-if="hasData" slot="body">No se encontraron resultados</p>
        <p v-else slot="body">{{searchMessage}}</p>
      </pm-notification>
      <transition name="move">
        <pm-loader v-show="isLoading"></pm-loader>
      </transition>
      <nav class="nav has-shadow">
        <div class="container">
          <input
            class="input is-large"
            type="text"
            placeholder="Buscar canciones"
            v-model="searchQuery"
            v-on:keyup.enter="search"
          >
          <a class="button is-info is-large" @click="search">Buscar</a>
          <a class="button is-info is-danger is-large">&times;</a>
          <p>
            <small>{{searchMessage}}</small>
          </p>
        </div>
      </nav>
      <div class="container results" v-show="!isLoading">
        <div class="columns">
          <div class="column" v-for="t in tracks" v-bind:key>
            <pm-track
              v-blur="t.preview_url"
              :track="t"
              @select="setSelectedTrack"
              :class="{'is-active': t.id === selectedTrack}"
            ></pm-track>
          </div>
        </div>
      </div>
    </section>
  </main>
</template> 

<script>
import trackService from "@/services/track";

import PmFooter from "@/components/layout/footer.vue"; // se registran componentes
import PmHeader from "@/components/layout/header.vue";

import PmTrack from "@/components/Track.vue";

import PmLoader from "@/components/shared/Loader.vue";
import PmNotification from "@/components/shared/Notification.vue";

export default {
  name: "app",
  components: { PmTrack, PmLoader, PmNotification }, //hay que declarar los componentes que importamos arriba para usarlos en el html
  data() {
    return {
      searchQuery: "",
      tracks: [],
      isLoading: false,
      selectedTrack: "",
      showNotification: false,
      hasData: false
    };
  },
  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length} `;
    }
  },
  created() {}, // generalmente en APIs para optimizar el tiempo de carga, obtengo la info y la cargo en memoria
  mounted() {}, // es un paso despues
  methods: {
    search() {
      if (!this.searchQuery) {
        return;
      }
      this.isLoading = true;
      trackService
        .search(this.searchQuery) // searchQuery está bindeada con el input de search
        .then(res => {
          this.showNotification = true;
          this.hasData = res.tracks.total === 0;
          this.tracks = res.tracks.items; //aca guardamos dentro de tracks los items que vienen en la respuesta
          this.isLoading = false;
        });
    },

    setSelectedTrack(id) {
      this.selectedTrack = id;
    }
  },
  watch: {
    // los watchers deben llamarse igual que las propiedades (ex: showNotifications)
    showNotification() {
      // vamos a darle animacion de 3 segundos para que desaparezca
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
      }
    }
  }
};
</script>

<style>
.results {
  margin-top: 50px;
}
.is-active {
  border: 3px solid aqua;
}
</style>
