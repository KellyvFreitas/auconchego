<template>
  <q-card-section class="row q-pa-md">
    <div class="col-6 flex-center">
      <img class="dogCat" src="src/assets/dog&cat.png" />
    </div>
    <div class="col-6">
      <q-form @submit="submitForm">
          <h6 class="titulo">
            <TextHighlight color="#C3E83B">Novo usuário?</TextHighlight><br>
          </h6>
           <p class="no-margin">Adicione suas informações abaixo</p>

        <div class="q-mb-md">
          <span>Como Podemos te ajudar?</span>
        </div>

        <div class="q-mb-sm">
          <q-checkbox
            v-model="helpOptions.adotar"
            label="Quero adotar um animalzinho"
            color="green"
            keep-color
          />
        </div>

        <div class="q-mb-sm">
          <q-checkbox
            v-model="helpOptions.cuidar"
            label="Quero receber dicas de como cuidar do meu pet"
            color="green"
            keep-color
          />
        </div>

        <div class="q-mb-sm">
          <q-checkbox
            v-model="helpOptions.clube"
            label="Quero fazer parte do Clube Auconchego"
            color="green"
            keep-color
          />
        </div>

        <div class="q-gutter-md">
          <div v-for="(field, index) in formFields" :key="field.model" class="q-mb-md">
            <q-input
              v-model="formData[field.model]"
              :label="field.label"
              :type="field.type"
              outlined
              dense
              :class="{
                'col-6': field.model === 'cidade' || field.model === 'estado' || field.model === 'email' || field.model === 'telefone'
                || field.model === 'nome' || field.model === 'endereco' || field.model === 'cep'
              }"
            />
          </div>
        </div>

        <q-btn label="Enviar" type="submit" color="primary" />
      </q-form>
    </div>
  </q-card-section>
</template>

<script>
import { reactive } from "vue";
import formFields from "src/components/formFields";
import TextHighlight from "components/TextHighlight.vue";

export default {
  name: "CadastroAdocao",
  components: { TextHighlight },
  setup() {
    const formData = reactive(
      formFields.reduce((acc, field) => {
        acc[field.model] = "";
        return acc;
      }, {})
    );

    const helpOptions = reactive({
      adotar: false,
      cuidar: false,
      clube: false
    });

    const submitForm = () => {
      console.log("Dados enviados:", formData);
    };

    return {
      formFields,
      formData,
      submitForm,
      helpOptions
    };
  }
};
</script>

<style scoped>
.q-mb-md {
  width: 100%;
}

.dogCat {
  width: 100%;
  max-width: 100%;
}

.q-input.col-6 {
  display: inline-block;
  width: 75%;
}
.titulo {
  display: flex;
 justify-content: center;
  align-items: center;
}
.no-margin {
  margin: 0;
}
</style>
