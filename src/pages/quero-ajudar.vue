<template>
  <q-layout>
    <HeaderComponent />
    <q-card-section class="flex flex-center background">
      <div class="box">
        <div class="header">
          <h4><text-highlight color="#BBED2F">Quero Ajudar</text-highlight></h4>
          <img src="src/assets/patinha.png" alt="Patinha" class="icon">
        </div>
        <div class="content">
          <span class="q-pt-lg">
            Acaochego é um instituto que oferece abrigo para animais, sejam gatos ou cachorros,<br>
            ajudando aqueles em situação de rua, buscando um lar para eles.
          </span>
          <div class=" q-pt-lg">
            Nosso objetivo é dar visibilidade aos animais que estão em abrigos de todo o país,<br>
            conectando-os com pessoas que desejam ter um pet. <br>Desde 2012, já conseguimos transformar a vida
            de mais de 30 mil animaizinhos, <br>com a ajuda de voluntários e doações de pessoas que apoiam nossa causa.
          </div>
        </div>
        <h5 class="text-center">
          <text-highlight color="#EDD07B">Faça sua doação e ajude-nos a continuar esse trabalho!</text-highlight>
        </h5>
        <div class="row">
          <span class="box1">A cada R$ 25 doados, você contribui para a alimentação de 3 bichinhos!</span>
          <img src="src/assets/dog&cat.png" alt="dog&cat" class="image">
        </div>
        <FormasAjudar/>
      </div>
    </q-card-section>

    <FooterComponent />
  </q-layout>
</template>
<script>
import TextHighlight from "components/TextHighlight.vue";
import HeaderComponent from "components/HeaderComponent.vue";
import FooterComponent from "components/FooterComponent.vue";
import FormasAjudar from "components/FormasAjudar.vue";

  export default {
  name: 'QueroAjudar',
  components: {FormasAjudar, FooterComponent, HeaderComponent, TextHighlight },
}
</script>

<style scoped>
.background {
  background-color: #F3F4F6;
  display: flex;
  justify-content: center;
}

.box {
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 40vw;
  width: 100%;
}

.box1 {
  background-color: white;
  padding: 15px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 3px dotted #BBED2F;
  margin-left: 40px;
  color: #5A41A0;
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 40px;
  height: 40px;
  margin-left: 10px;
}

.image {
  width: 500px;
  height: 500px;
  display: inline-block;
  margin: auto;
}

.content {
  text-align: center;
  font-size: 20px;
}
</style>
