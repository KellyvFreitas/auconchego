<template>
  <q-card-section class="footer-container flex-center flex q-pa-none">
    <img class="image q-mb-lg" style="max-width: 200px;" src="/src/assets/image.png">
    <div class="flex-center q-mb-md">
      <router-link to="/#">
        <q-btn class="buttons" flat label="Página Inicial"></q-btn>
      </router-link>
      <router-link to="/quero-adotar">
        <q-btn class="buttons" flat label="Quero Adotar"></q-btn>
      </router-link>
      <router-link to="/quero-ajudar">
        <q-btn class="buttons" flat label="Quero Ajudar"></q-btn>
      </router-link>
      <router-link to="/voluntarios">
        <q-btn class="buttons" flat label="Auconchego"></q-btn>
      </router-link>
      <q-btn
        unelevated
        rounded
        style="background-color: #BBED2F; width: 20vh; margin-left: 40px"
        label="Contatos"
        @click="scrollToFooter"
      />
    </div>
  </q-card-section>
</template>

<script>
export default {
  name: "HeaderComponent",
  setup() {
    const scrollToFooter = () => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    };

    return {
      scrollToFooter,
    };
  },
};
</script>

<style scoped>
.buttons {
  color: white;
}
.footer-container {
  width: 100%;
  padding-bottom: 40px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: path("M0,0 L0,150 Q600,250 1200,200 T2400,200 L2400,0 Z");
  box-sizing: border-box;
  background: linear-gradient(100deg, #5a41a0, #3a2a7a);
}
</style>
