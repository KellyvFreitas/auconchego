<template>
  <q-layout class="flex flex-center">
    <div class="container">
      <q-card-section class="box">
        <h4><TextHighlight color="#BBED2F">Sobre o Auconchego</TextHighlight></h4>
        <p class="text">
          O Auconchego é uma plataforma online de adoção de animais, conectando cães e gatos de abrigos a pessoas em busca
          de um novo amigo. Fundado em 2015, já ajudou centenas de animais a encontrarem lares amorosos. A iniciativa é
          online, mas nossos voluntários frequentemente abrigam os animais temporariamente enquanto encontramos um lar definitivo.
        </p>
        <p class="text-bold q-mt-lg">Como Funciona:</p>
        <ul class="text">
          <li>
            <span class="text-bold">Cadastro de animais:</span> Os voluntários do Auconchego cadastram os animais no site e
            publicam informações sobre eles.
          </li>
          <li>
            <span class="text-bold">Busca pelo animal:</span> Interessados acessam o site para encontrar um pet que se encaixe
            no seu perfil.
          </li>
          <li>
            <span class="text-bold">Adoção:</span> Após escolher, basta combinar com a ONG para buscar o novo membro da família.
          </li>
        </ul>
        <p class="text-bold q-mt-lg">Apoie o projeto</p>
        <p class="text">
          Contribua como pessoa física ou jurídica e siga o Auconchego nas redes sociais para acompanhar histórias de amor e adoção.
        </p>
        <p class="text">
          Desde 2015, somos oficialmente uma associação, o que nos permite firmar parcerias para ajudar ainda mais animais!
        </p>
      </q-card-section>
    </div>

    <q-card-section class="cta-banner">
      <h4 class="cta-heading">
        <TextHighlight color="#F5FFD9">Vamos unir patinhas e corações!</TextHighlight> 🐾
      </h4>
    </q-card-section>
  </q-layout>
</template>
<script>
import TextHighlight from "components/TextHighlight.vue";
export default {
  name: 'Voluntarios',
  components: {
    TextHighlight
  }
}
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.box {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  width: 100%;
  text-align: center;
}

.text {
  font-size: 16px;
}

.text-bold {
  font-weight: bold;
}

.q-mt-lg {
  margin-top: 16px;
}

.cta-banner {
  background-color: #AED937;
  width: 100%;
  margin-top: 80px;
  margin-bottom: 80px;
  text-align: center;
}

.cta-heading {
  color: #3C2B7C;
}
</style>
