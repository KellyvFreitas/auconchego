<template>
  <q-card class="containerModal">
    <q-card-section class="modal-close">
      <q-btn
        square
        class="bg-pink-4 text-white"
        flat
        round
        dense
        v-close-popup
      >
        <q-icon name="close" />
      </q-btn>
    </q-card-section>

    <div class="text-h5 text-center text-primary">Este é o momento mais fofinho do seu dia!</div>
    <p class="text-body1 text-center">Está pronto para dar uma nova vida cheia de carinho para um animalzinho especial? Este é <strong>{{ animal.nome }}</strong> e está esperando por você! Ele(a) é cheio de energia, amor e tem muito a oferecer. Não deixe esse serzinho encantador passar despercebido!</p>
    <p class="text-body1 text-center">Nosso amigo(a) está pronto para se tornar parte da sua família. O que acha de conhecer melhor e quem sabe, dar o primeiro passo para uma vida cheia de aventuras juntos?</p>

    <q-card-section class="q-mt-md">
      <q-img :src="animal.foto" :alt="animal.nome" class="animal-image bounce" />
      <div class="text-h6 text-center">{{ animal.nome }}</div>
      <div class="text-center">Sexo: {{ animal.sexo }}</div>
    </q-card-section>

    <q-card-actions class="q-pt-md">
      <q-btn
        label="Tenho Interesse em Adotar"
        color="primary"
        class="q-mt-md"
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
  border-radius: 15px;
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out;
}

.animal-image.bounce:hover {
  transform: scale(1.1);
}

.containerModal {
  width: 80vh;
  padding: 30px;
  background-color: #f8f9fa;
  border-radius: 15px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
}

.text-primary {
  color: #FF4081;
}

.text-center {
  text-align: center;
}

.q-card-actions {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}

.q-btn {
  background-color: #FF4081;
  color: white;
  font-weight: bold;
  border-radius: 20px;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
}

.q-btn:hover {
  background-color: #f50057;
}

.modal-close {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}

.metro-modal--close q-btn {
  background-color: transparent;
  border: none;
}

.metro-modal--close q-icon {
  color: #FF4081;
}
</style>
