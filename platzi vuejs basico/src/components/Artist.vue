<template>
  <li class="artist">
    <h2>
      <a :href="artist.url" target="_blank">{{ artist.name }}</a>
    </h2>
    <img :src="artist.image[2]['#text']">
  </li>
</template>

<script>
export default {
  name: "artist",
  props: ["artist"]
};
</script>

<style>
li.artist {
  display: inline-block;
  margin: 10px;
}
</style>
 