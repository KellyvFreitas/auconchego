<template>
  <q-layout>
    <q-card-section class="flex flex-center background">
      <div class="box">
<!--        <div class="row" style="gap: 15px">-->
<!--          <q-select-->
<!--            outlined-->
<!--            :options="optionsEspecies"-->
<!--            class="input"-->
<!--            label="Espécies"-->
<!--            option-value="name"-->
<!--            option-label="name"-->
<!--            v-model="form.especies"-->
<!--          />-->
<!--        </div>-->
<!--        <q-btn class="button" label="Pesquisar" @click="filtrarAnimais" />-->

        <q-card-section>
          <div>
            <q-list class="row">
              <q-item
                v-for="(animal, index) in paginatedAnimals"
                :key="index"
                class="animal-item"
                @click="openModalQueroAdotar(animal)"
                clickable
              >
                <q-card>
                  <q-card-section class="boxAnimal">
                    <q-img :src="animal.foto" :alt="animal.nome" class="animal-image" />
                  </q-card-section>
                  <q-card-section class="text-center">
                    <p class="animal-name">{{ animal.nome }}</p>
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
              :max="maxPages"
              :max-pages="3"
              :ellipses="false"
              :boundary-numbers="false"
            />
          </div>
        </q-card-section>
      </div>
    </q-card-section>

    <q-dialog v-model="showDialog">
      <modal-quero-adotar
        :animal="selectedAnimal"
        @adotar="adotarAnimal"
      />
    </q-dialog>
  </q-layout>
</template>

<script>
import { ref, computed } from 'vue'
import { getAnimais } from "src/service/service";
import { Dialog } from "quasar";
import ModalQueroAdotar from "components/ModalQueroAdotar.vue";

export default {
  name: 'QueroAjudar',
  components: {
    ModalQueroAdotar
  },
  setup() {
    const showDialog = ref(false)
    const selectedAnimal = ref(null)

    const animais = ref(getAnimais())
    const form = ref({
      especies: ''
    })
    const current = ref(1)
    const itemsPerPage = 10
    const maxPages = computed(() => Math.ceil(filteredAnimals.value.length / itemsPerPage))

    const filteredAnimals = computed(() => {
      if (!form.value.especies) return animais.value
      return animais.value.filter(animal => animal.especie === form.value.especies)
    })

    const paginatedAnimals = computed(() => {
      const startIndex = (current.value - 1) * itemsPerPage
      const endIndex = startIndex + itemsPerPage
      return filteredAnimals.value.slice(startIndex, endIndex)
    })

    const openModalQueroAdotar = (animal) => {
      selectedAnimal.value = animal
      showDialog.value = true
    }

    const adotarAnimal = (animal) => {
      console.log('Animal adotado:', animal)
      showDialog.value = false
    }

    const filtrarAnimais = () => {
      current.value = 1
    }

    return {
      animais,
      form,
      current,
      maxPages,
      paginatedAnimals,
      showDialog,
      selectedAnimal,
      openModalQueroAdotar,
      adotarAnimal,
      optionsEspecies: ref([{ name: 'Cachorro' }, { name: 'Gato' }]),
      filtrarAnimais
    }
  }
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

.animal-info {
  font-size: 0.9em;
  color: #666;
}
</style>
