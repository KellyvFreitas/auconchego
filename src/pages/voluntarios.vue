<template>
  <q-layout view="lHh Lpr lFf">
    <HeaderComponent />
    <div>
      <h5>Sobre o Auconchego</h5>
      <p>
        O Auconchego é uma plataforma online de adoção de animais, conectando cães e gatos de abrigosa a pessoas em busca
        de um novo amigo.
        Fundado em 2015, já ajudou centenas de animais a encontrarem lares amorosos. A iniciativa é online, mas nossos voluntários
        ocorrem de diversas vezes abrigarem o animal em sua casa, enquanto encontramos um lar amoroso.
      </p>
      <p class="text-bold">Como Funciona:</p>
      <ul>
        <li><span class="text-bold">Cadastro de animais:</span> Os voluntários do auconchego cadastram os animais no
          site e publicam informações sobre o animal.
        </li>
        <li>
          <span class="text-bold">Busca pelo animal:</span> Interessados acessam o site para encontrar um pet
          que se encaixe no seu perfil.
        </li>
        <li>
          <span class="text-bold">Adoção:</span> Após escolher, basta combinar com a ONG para buscar o novo membro da família.
        </li>
      </ul>
      <p class="text-bold">Apoie o projeto</p>
      <p>
        Contribuia como pessoa física ou jurídica e siga o Auconchego nas redes sociais para acompanhar histórias de amor e adoção.
      </p>
      <p>
        Desde 2015, somos oficialmente uma associação, o que nos permite firmar parcerias para ajudar ainda mais animais!
      </p>
    </div>
    <FooterComponent />
  </q-layout>
</template>
<script setup>
import HeaderComponent from "components/HeaderComponent.vue";
import FooterComponent from "components/FooterComponent.vue";
</script>
