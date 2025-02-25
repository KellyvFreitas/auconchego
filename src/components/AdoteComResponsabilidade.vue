<template>
  <HeaderComponent />
  <div class="adoption-container">
    <q-card class="adoption-card">
      <q-card-section>
        <h5 class="title">Adoção Animal: Amor que Transforma Vidas 🐾</h5>
        <p class="intro-text">Você já pensou no que realmente significa adotar um animal?</p>
        <p>Não é apenas tirar um bichinho da rua, é transformar sua vida e a dele com um amor puro e sincero.</p>

        <p class="section-title">💖 Porque adotar?</p>
        <p>Adotar é um ato de amor e responsabilidade. Animais vivem em média 18 anos e precisam de cuidados como vacinas, alimento, carinho e um lar seguro.</p>

        <p class="section-title">📌 Adotar com consciência</p>
        <p>Adoção não é moda, é compromisso! Nada de adotar para deixar preso no quintal. Eles merecem um lar cheio de amor e respeito.</p>

        <p class="section-title">✨ Transforme sua vida!</p>
        <p>Quem adota descobre que o verdadeiro resgate é o nosso. Esses companheiros leais trazem alegria, conforto e muito amor para o dia a dia.</p>

        <p class="section-title">🐶 Quem ama, adota. E quem adota, é mais feliz!</p>
        <p>Pronto para viver essa experiência?
          <q-btn  @click="verAnimais">
            <TextHighlight color="#A6CA45">Clica aqui e encontre seu novo melhor amigo</TextHighlight>
          </q-btn>
        </p>
      </q-card-section>
    </q-card>
  </div>
  <FooterComponent />
</template>

<script>
import HeaderComponent from "components/HeaderComponent.vue";
import FooterComponent from "components/FooterComponent.vue";
import TextHighlight from "components/TextHighlight.vue";

export default {
  name: "AdoteComResponsabilidade",
  components: {TextHighlight},
  methods: {
    verAnimais() {
      this.$router.push('/quero-adotar');
    },
  }
};
</script>

<style scoped>
.adoption-container {
  max-width: 700px;
  margin: 20px auto;
  padding: 20px;
}

.adoption-card {
  background: #fff8e1;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  font-size: 1.8rem;
  color: #ff5722;
  font-weight: bold;
}

.intro-text {
  font-size: 1.2rem;
  font-weight: bold;
  color: #4e342e;
}

.section-title {
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 10px;
  color: #ff9800;
}

.adopt-btn {
  margin-left: 5px;
  font-weight: bold;
}
</style>
