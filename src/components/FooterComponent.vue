<template>
  <q-card-section class="box">
    <!-- Botões de Navegação (No Topo) -->
    <div class="buttons-container">
      <div class="buttons-group">
        <router-link to="/#">
          <q-btn class="buttons" flat label="Página Inicial"></q-btn>
        </router-link>
        <router-link to="/quero-adotar">
          <q-btn class="buttons" flat label="Adote com Responsabilidade"></q-btn>
        </router-link>
      </div>

      <div class="buttons-group">
        <router-link to="/quero-ajudar">
          <q-btn class="buttons" flat label="Doe qualquer valor =D"></q-btn>
        </router-link>
        <router-link to="/voluntarios">
          <q-btn class="buttons" flat label="Sobre o Projeto"></q-btn>
        </router-link>
      </div>
      <div class="buttons-group">
        <router-link to="/cadastrar">
          <q-btn class="buttons" flat label="Cadastre-se"></q-btn>
        </router-link>
        <router-link to="/perguntas-frequentes">
          <q-btn class="buttons" flat label="Perguntas Frequentes"></q-btn>
        </router-link>
      </div>
    </div>

    <!-- Redes Sociais (Embaixo) -->
    <div class="content">
      <p class="redeSocialText">Nossas Redes Sociais</p>
      <div class="social-icons">
        <q-btn flat>
          <img class="imageSocialWhapp" src="src/assets/whatsapp.webp"/>
        </q-btn>
        <q-btn flat>
          <img class="imageSocialFace" src="src/assets/facebook.png"/>
        </q-btn>
        <q-btn flat>
          <img class="imageSocialInsta" src="src/assets/instagram.png"/>
        </q-btn>
      </div>
    </div>
  </q-card-section>
</template>

<style lang="css" scoped>
.box {
  width: 100%;
  height: 30vh;
  background-color: #F5FFD9;
  display: flex;
  flex-direction: column; /* Empilha os elementos verticalmente */
  justify-content: space-between; /* Distribui os elementos uniformemente */
  align-items: center;
  padding: 20px 0;
}

.box::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("src/assets/IMAGE2.png");
  background-repeat: repeat;
  background-size: 80%;
  background-position: center;
  opacity: 0.36;
  z-index: 0;
}

.buttons-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 150px;
  margin-bottom: 50px;
  width: 100%;
}

.buttons-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.buttons {
  color: #3B2B7C;
  //background-color: rgba(59, 43, 124, 0.3);
  //border-radius: 10%;
}

.content {
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza as redes sociais */
  gap: 10px;
  width: 100%;
}

.redeSocialText {
  font-size: 18px;
  color: #3B2B7C;
  text-align: center;
}

.social-icons {
  display: flex;
  flex-direction: row; /* Ícones em linha */
  gap: 15px;
}

.imageSocialWhapp {
  width: 40px;
}
.imageSocialFace {
  width: 30px;
}
.imageSocialInsta {
  width: 55px;
}
</style>
<script setup>
</script>
