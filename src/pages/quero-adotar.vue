<template>
  <q-layout>
    <q-card-section class="flex flex-center background">
      <div class="box">
        <div class="row" style="gap: 15px">
          <q-select
            outlined
            :options="optionsEspecies"
            class="input"
            label="Espécies"
            option-value="name"
            option-label="name"
            v-model="form.especies"
          />
<!--          <q-select-->
<!--            outlined-->
<!--            :options="['Feminino', 'Masculino']"-->
<!--            class="input"-->
<!--            label="Selecione o Sexo"-->
<!--            v-model="form.sexo"-->
<!--          />-->
<!--          <q-select-->
<!--            outlined-->
<!--            :options="optionPorte"-->
<!--            class="input"-->
<!--            label="Selecione o Porte"-->
<!--            v-model="form.porte"-->
<!--            option-value="name"-->
<!--            option-label="name"-->
<!--          />-->
<!--          <q-select-->
<!--            outlined-->
<!--            :options="optionsEstado"-->
<!--            class="input"-->
<!--            label="Estado"-->
<!--            option-value="name"-->
<!--            option-label="name"-->
<!--            v-model="form.estado"-->
<!--          />-->
<!--          <q-select-->
<!--            outlined-->
<!--            :options="optionsCidade"-->
<!--            class="input"-->
<!--            label="Cidade"-->
<!--            option-value="name"-->
<!--            option-label="name"-->
<!--            v-model="form.cidade"-->
<!--          />-->
        </div>
        <q-btn class="button" label="Pesquisar"/>
        <q-card-section>
          <div>
              <q-list class="row">
                <q-item
                  v-for="(animal, index) in animais"
                  :key="index"
                  class="animal-item"
                >
                  <q-card>
                    <q-card-section class="boxAnimal">
                      <q-img :src="animal.foto" :alt="animal.nome" class="animal-image" />
                    </q-card-section>
                    <q-card-section class="text-center">
                      <p class="animal-name">{{ animal.nome }}</p>
                      <p class="animal-info">Porte: {{ animal.porte }}</p>
                      <p class="animal-info">Sexo: {{ animal.sexo }}</p>
                    </q-card-section>
                  </q-card>
                </q-item>
              </q-list>
          </div>
            <div class="q-pa-lg flex flex-center">
              <q-pagination
                v-model="current"
                color="teal"
                :max="5"
                :max-pages="3"
                :ellipses="false"
                :boundary-numbers="false"
              />
            </div>
        </q-card-section>
      </div>
    </q-card-section>
  </q-layout>
</template>

<script>
import TextHighlight from "components/TextHighlight.vue";
import HeaderComponent from "components/HeaderComponent.vue";
import FooterComponent from "components/FooterComponent.vue";
import FormasAjudar from "components/FormasAjudar.vue";
import * as service from "src/service/service";
import { ref } from 'vue'
import {getAnimais} from "src/service/service";

export default {
  name: 'QueroAjudar',
  components: {FormasAjudar, FooterComponent, HeaderComponent, TextHighlight},
  setup() {
    const optionsEspecies = ref([
      { name: 'Cachorro' },
      { name: 'Gato' },
    ])

    const optionPorte = ref([
      { name: 'Pequeno' },
      { name: 'Médio' },
      { name: 'Grande' },
    ])

    const optionsEstado = ref([
      { name : 'CE' }
    ])

    const optionsCidade = ref([
      { name : 'Russas' }
    ])

    return {
      optionsEspecies,
      optionPorte,
      optionsEstado,
      optionsCidade,
      optionsEstados: ref([]),
      form: ref({
        especies: '',
        sexo: '',
        porte: '',
      }),
      animais: ref([]),
      current: ref(3)
    };
  },
  mounted() {
    this.carregarFotosAnimais()
  },
  methods: {
    carregarFotosAnimais() {
      this.animais = getAnimais()
    }
  },

}
</script>

<style scoped>
.background {
  display: flex;
  justify-content: center;
}

.box {
  background-color: #F3F4F6;
  padding: 8px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
}

.input {
  width: 230px;
}

.button {
  width: 200px;
  margin-top: 20px;
}

.animal-item {

}
.animal-image {
  width: 23vh;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}
.animal-name {
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
}

.animal-info-container {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
}

.animal-info {
  font-size: 0.9em;
  color: #666;
}

</style>
