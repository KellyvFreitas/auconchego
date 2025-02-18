<template>
  <q-card>
    <q-card-section class="q-pt-none">
      <div class="text-h6">Deseja adotar este animal?</div>
    </q-card-section>

    <q-card-section class="q-mt-md">
      <q-img :src="animal.foto" :alt="animal.nome" class="animal-image" />
      <div class="text-h6">{{ animal.nome }}</div>
      <div>Sexo: {{ animal.sexo }}</div>
    </q-card-section>

    <q-card-actions>
      <q-btn
        label="Tenho Interesse em Adotar"
        color="primary"
        @click="abrirWhatsApp"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'ModalQueroAdotar',
  props: {
    animal: {
      type: Object,
      required: true
    }
  },
  methods: {
    abrirWhatsApp() {
      const mensagem = `Olá! Tenho interesse em adotar o(a) ${this.animal.nome}, um(a) ${this.animal.sexo}. Gostaria de mais informações!`;
      const numeroWhatsApp = '559999999999';
      const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

      // Abrir o link do WhatsApp
      window.open(linkWhatsApp, '_blank');
    }
  }
}
</script>

<style scoped>
.animal-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}
</style>
