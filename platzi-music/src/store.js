import Vue from "vue";
import Vuex from "vuex";

import trackService from "@/services/track";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    track: {}
  },
  getters: {
    trackTitle(state) {
      if (!state.track.name) {
        return "";
      }
      return `${state.track.name} - ${state.track.artists[0].name}`;
    }
  },
  mutations: {
    // codigo asincronico
    setTrack(state, track) {
      state.track = track;
    }
  },
  actions: {
    // no puedo llamar codigo asincronico
    getTrackById(context, payLoad) {
      return trackService.getById(payLoad.id).then(res => {
        context.commit("setTrack", res);
        return res;
      });
    }
  }
});

export default store;
