<template>
  <q-card>
    <Home />
    <router-view />
  </q-card>
</template>

<script setup>
import HeaderComponent from "components/HeaderComponent.vue";
import Home from "pages/Home.vue";

defineOptions({
  name: 'MainLayout'
})
</script>
