<template>
  <div id="app">
    <input v-model="name">
    <p>{{name}}</p>

    <input v-model="lastName">

    <a v-bind:href="url">link</a>
    <p>{{fullName}}</p>
    <button v-on:click="format">format</button>
    <p>{{formattedName}}</p>
  </div>
</template> 

<script>
export default {
  name: "app",
  data() {
    return {
      name: "",
      url: "http://www.google.com.ar",
      lastName: "",
      formattedName: ""
    };
  },
  computed: {
    fullName() {
      return this.name + "" + this.lastName;
    }
  },
  watch: {
    name(newVal, oldVal) {
      console.log(newVal, oldVal);
    }
  },
  methods: {
    format() {
      this.formattedName = this.name
        .split("")
        .join("-")
        .toUpperCase();
    }
  }
};
</script>

<style>
</style>
