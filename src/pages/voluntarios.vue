<template>
  <q-layout class="flex flex-center">
    <HeaderComponent />
    <div class="container">
      <q-card-section class="box">
        <h4><text-highlight color="#BBED2F">Sobre o Auconchego</text-highlight></h4>
        <p>
          O Auconchego é uma plataforma online de adoção de animais, conectando cães e gatos de abrigos a pessoas em busca
          de um novo amigo. Fundado em 2015, já ajudou centenas de animais a encontrarem lares amorosos. A iniciativa é
          online, mas nossos voluntários frequentemente abrigam os animais temporariamente enquanto encontramos um lar definitivo.
        </p>
        <p class="text-bold">Como Funciona:</p>
        <ul>
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
        <p class="text-bold">Apoie o projeto</p>
        <p>
          Contribua como pessoa física ou jurídica e siga o Auconchego nas redes sociais para acompanhar histórias de amor e adoção.
        </p>
        <p>
          Desde 2015, somos oficialmente uma associação, o que nos permite firmar parcerias para ajudar ainda mais animais!
        </p>
      </q-card-section>
    </div>
    <FooterComponent />
  </q-layout>
</template>

<script setup>
import HeaderComponent from "components/HeaderComponent.vue";
import FooterComponent from "components/FooterComponent.vue";
import TextHighlight from "components/TextHighlight.vue";
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
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
</style>
