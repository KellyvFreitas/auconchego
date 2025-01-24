<template>
  <div class="colorful-line"></div>
  <router-view />
</template>

<script setup>
defineOptions({
  name: 'App'
});
</script>

<style scoped>
.colorful-line {
  height: 8px;
  background: linear-gradient(to right, #5030AC, #BBED2F, #F6CB89);
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
}
</style>
