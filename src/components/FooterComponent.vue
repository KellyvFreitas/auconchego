<template>
  <div class="footer-container">
    <section class="footer-content">
      <q-card-section class="footer-row">
        <!-- Imagem -->
        <div class="footer-item">
          <img class="footer-logo" src="src/assets/dog&cat.png" />
        </div>

        <!-- Botões -->
        <div class="footer-item footer-buttons">
          <router-link to="/adote-com-responsabilidade">
            <q-btn flat no-caps color="white" label="Infos.: Adote com Responsabilidade"></q-btn>
          </router-link>
          <router-link to="/quero-adotar">
            <q-btn flat no-caps color="white" label="Adote um peludinho"></q-btn>
          </router-link>
          <router-link to="/quero-ajudar">
            <q-btn flat no-caps color="white" label="Doe qualquer valor"></q-btn>
          </router-link>
          <router-link to="/voluntarios">
            <q-btn flat no-caps color="white" label="Conheça o Auconchego"></q-btn>
          </router-link>
          <router-link to="/perguntas-frequentes">
            <q-btn flat no-caps color="white" label="Perguntas Frequentes"></q-btn>
          </router-link>
          <router-link to="/termo-uso">
            <q-btn flat no-caps color="white" label="Termo de Uso e Política de Privacidade"></q-btn>
          </router-link>
        </div>

        <!-- Redes Sociais -->
        <div class="footer-item footer-socials">
          <img src="src/assets/instagram.png" alt="Instagram" />
          <img src="src/assets/whatsapp.webp" alt="WhatsApp" />
          <img src="src/assets/facebook.png" alt="Facebook" />
        </div>
      </q-card-section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.footer-container {
  background-color: #5a41a0;
  width: 100%;
  height: auto; /* Ajustado a altura para evitar espaço em branco */
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: path('M0,350 L0,150 Q600,50 1200,100 T2400,100 L2400,350 Z');
  box-sizing: border-box;
}

.footer-content {
  display: flex;
  justify-content: space-around; /* Distribui uniformemente os itens */
  align-items: center; /* Centraliza verticalmente */
  width: 100%;
  flex-wrap: wrap; /* Permite quebra para telas menores */
}

.footer-row {
  display: flex;
  justify-content: space-evenly; /* Espaçamento uniforme entre os itens */
  width: 100%;
}

.footer-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.footer-logo {
  max-width: 250px;
  margin-top: 80px;
}

.footer-buttons .q-btn {
  margin: 10px 0;
}

.footer-socials img {
  width: 50px;
}

/* Removendo espaço em branco abaixo do footer */
.footer-container {
  overflow: hidden;
}
</style>
