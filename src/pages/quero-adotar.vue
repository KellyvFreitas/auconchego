<template>
  <q-layout>
    <HeaderComponent />
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
          <q-select
            outlined
            :options="['Feminino', 'Masculino']"
            class="input"
            label="Selecione o Sexo"
            v-model="form.sexo"
          />
          <q-select
            outlined
            :options="optionPorte"
            class="input"
            label="Selecione o Porte"
            v-model="form.porte"
            option-value="name"
            option-label="name"
          />
        </div>
        <div class="row q-mt-md" style="gap: 15px">
          <q-select outlined :options="optionEstado" class="input" label="Estado"/>
          <q-select outlined :options="optionCidade" class="input" label="Cidade" />
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
                  <q-card-section>
                    <q-img :src="animal.foto" :alt="animal.nome" class="animal-image" />
                  </q-card-section>
                  <q-card-section class="text-center">
                    <p class="animal-name">{{ animal.nome }}</p>
                  </q-card-section>
                </q-card>
              </q-item>
            </q-list>
          </div>
          <div class="q-pa-lg flex flex-center">
            <q-pagination
              v-model="current"
              :max="5"
            />
          </div>
        </q-card-section>
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
import * as service from "src/service/service";
import { ref } from 'vue'

export default {
  name: 'QueroAjudar',
  components: {FormasAjudar, FooterComponent, HeaderComponent, TextHighlight},
  setup() {
    const optionsEspecies = ref([
      { name: 'Cachorro' },
      { name: 'Gato' },
      { name: 'Pássaro' },
    ])

    const optionPorte = ref([
      { name: 'Pequeno' },
      { name: 'Médio' },
      { name: 'Grande' },
    ])
    return {
      optionsEspecies,
      optionPorte,
      optionsEstados: ref([]),
      form: ref({
        especies: '',
        sexo: '',
        porte: '',
      }),
      animais: [],
      current: ref(3)
    };
  },
  async mounted() {
    try {
      const animais = await service.getAnimais();
      this.animais = animais;
    } catch (error) {
      console.error("Erro ao carregar animais:", error);
    }
    getEstados() {
      try {
        const { data } = this.fetchEstados.get()
        this.optionsEstados = data
      } catch (e) {
        console.error("Erro ao carregar animais:", error);
      }
    }

  }


}
</script>

<style scoped>
.background {
  background-color: #F3F4F6;
  display: flex;
  justify-content: center;
}

.box {
  background-color: #F3F4F6;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 40vw;
  width: 100%;
}

.input {
  width: 230px;
}

.button {
  width: 400px;
  margin-top: 30px;
}

.animal-item {
  display: flex;
  justify-content: center;
}
.animal-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
.animal-name {
  margin-top: 10px;
  font-size: 1.2em;
}
</style>
