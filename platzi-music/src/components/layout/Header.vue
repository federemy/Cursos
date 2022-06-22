<template>
  <section>
    <div
      style="background-color: green;height: 50px; width: 100%;margin-bottom: 50px; text-align: center; color: white"
    >
      <div class="container">Platzi Music</div>
      <nav>
        <a @click="selectLang('en')">en</a>
        <a @click="selectLang('es')">es</a>
        <router-link to="search">{{$t('search')}}</router-link>
        <router-link to="about">{{$t('about')}}</router-link>
      </nav>
    </div>
    <div class="hero-body">
      <div class="container">
        <pm-player></pm-player>
      </div>
    </div>
  </section>
</template>
<script>
import PmPlayer from "@/components/Player";
export default {
  components: { PmPlayer },
  methods: {
    selectLang(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>

<style>
.hero-body {
  display: inline-block;
  float: left;
}
</style>
