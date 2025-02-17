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
        </div>
        <q-btn class="button" label="Pesquisar" />

        <!-- Botão de Cadastro (visível apenas para administradores) -->
        <q-btn
          v-if="isAdmin"
          class="button q-mt-md"
          color="primary"
          label="Cadastrar Animal"
          @click="openCadastroAnimal"
        />

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

    <!-- Dialog para Cadastrar Animal -->
    <q-dialog v-model="showDialog">
      <q-card class="q-pa-md">
        <q-card-section>
          <div class="text-h6">Cadastrar Novo Animal</div>
        </q-card-section>
        <q-card-section>
          <q-file
            v-model="novoAnimal.foto"
            label="Escolher imagem"
            accept="image/*"
            filled
          />
          <q-input
            v-model="novoAnimal.nome"
            label="Nome do Animal"
            filled
            class="q-mt-md"
          />
          <q-select
            v-model="novoAnimal.sexo"
            :options="['Feminino', 'Masculino']"
            label="Sexo"
            filled
            class="q-mt-md"
          />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancelar" v-close-popup />
          <q-btn color="primary" label="OK" @click="adicionarAnimal" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { getAnimais } from "src/service/service";

export default {
  name: 'QueroAjudar',
  setup() {
    const isAdmin = ref(true) // Defina como 'true' para simular um administrador
    const showDialog = ref(false)
    const animais = ref(getAnimais())

    const novoAnimal = ref({
      foto: '',
      nome: '',
      sexo: ''
    })

    const openCadastroAnimal = () => {
      showDialog.value = true
    }

    const adicionarAnimal = () => {
      if (novoAnimal.value.foto && novoAnimal.value.nome && novoAnimal.value.sexo) {
        animais.value.push({ ...novoAnimal.value })
        novoAnimal.value = { foto: '', nome: '', sexo: '' }
        showDialog.value = false
      }
    }

    return {
      isAdmin,
      showDialog,
      animais,
      novoAnimal,
      openCadastroAnimal,
      adicionarAnimal,
      optionsEspecies: ref([{ name: 'Cachorro' }, { name: 'Gato' }]),
      form: ref({ especies: '' }),
      current: ref(3)
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
