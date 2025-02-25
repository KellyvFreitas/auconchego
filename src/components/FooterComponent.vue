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
        <router-link to="/cadastro-adocao">
          <q-btn class="buttons" flat label="Cadastro para Adoção"></q-btn>
        </router-link>
        <router-link to="/perguntas-frequentes">
          <q-btn class="buttons" flat label="Perguntas Frequentes"></q-btn>
        </router-link>
      </div>
    </div>
    <div class="content">
      <p class="redeSocialText">Nossas Redes Sociais</p>
      <div class="social-icons">
        <q-btn
          flat
          :href="'https://wa.me/5588996677477?text=' +
          encodeURIComponent('Olá! Gostaria de mais informações.')"
          target="_blank"
        >
          <img class="imageSocialWhapp" src="src/assets/whatsapp.webp" />
        </q-btn>
        <q-btn
          flat
          href="https://www.facebook.com/seuPerfilOuPagina"
          target="_blank"
        >
          <img class="imageSocialFace" src="src/assets/facebook.png"/>
        </q-btn>
        <q-btn
          flat
          href="https://www.instagram.com/seuPerfil"
          target="_blank"
        >
          <img class="imageSocialInsta" src="src/assets/instagram.png"/>
        </q-btn>
      </div>
    </div>
  </q-card-section>
  <q-card-section class="textFinaly">
    <p>Projeto Auconcheco - CNPJ 00.000.000/0000-00</p>
  </q-card-section>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style lang="css" scoped>
.box {
  width: 100%;
  height: 30vh;
  background-color: #6789AE;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  opacity: 0.70;
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
  color: white;
}

.content {
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.redeSocialText {
  font-size: 18px;
  color: white;
  text-align: center;
}

.social-icons {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
}

.imageSocialWhapp {
  width: 40px;
}
.imageSocialFace {
  width: 30px;
}
.imageSocialInsta {
  width: 50px;
}

@media (max-width: 600px) {
  .social-icons {
    flex-direction: row;
    gap: 20px;
    justify-content: space-around;
  }

  .imageSocialWhapp, .imageSocialFace, .imageSocialInsta {
    width: 40px;
  }
}

.textFinaly {
  background-color: #1D1D1D;
  color: white;
  text-align: center;
  height: 38px;
  font-size: 10px;
}
</style>
