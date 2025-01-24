<template>
  <span class="text-highlight"><slot></slot></span>
</template>
<script setup lang="ts">
const props = defineProps(['color'])
</script>

<style scoped>
.text-highlight {
  transform: translate(100%,100%);
  background-image: linear-gradient(v-bind('props.color'), v-bind('props.color'));
  background-size: 100% 20%;
  background-repeat: no-repeat;
  background-position: 0% 75%;
  transition: background-size .7s, background-position .5s ease-in-out;
}

.text-highlight:hover {
  background-size: 100% 80%;
  background-position: 50% 50%;
  transition: background-position .7s, background-size .5s ease-in-out;
}
</style>
