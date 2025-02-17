<template>
  <q-card-section class="row q-pa-md">
    <div class="col-6 flex-center">
      <img class="dog-cat" src="src/assets/dog&cat.png" alt="Imagem de cachorro e gato" />
    </div>

    <div class="col-6 form-container">
      <img class="logo" src="src/assets/LOGO.png" alt="Logo da plataforma" />

      <h6>
        <TextHighlight color="#C3E83B">Novo usuário?</TextHighlight>
      </h6>

      <q-form @submit="submitForm">
        <p class="no-margin">Adicione suas informações abaixo</p>

        <div class="q-mb-md">
          <span>Como podemos te ajudar?</span>
        </div>

        <div class="help-options">
          <q-checkbox v-model="helpOptions.adotar" label="Quero adotar um animalzinho" color="green" keep-color />
          <q-checkbox v-model="helpOptions.cuidar" label="Quero receber dicas de como cuidar do meu pet" color="green" keep-color />
          <q-checkbox v-model="helpOptions.clube" label="Quero fazer parte do Clube Auconchego" color="green" keep-color />
        </div>

        <div class="q-gutter-md form-fields">
          <q-input
            v-for="(field, index) in formFields"
            :key="field.model"
            v-model="formData[field.model]"
            :label="field.label"
            :type="field.type"
            outlined
            dense
            class="q-mb-md input-field"
          />
        </div>

        <q-btn label="Enviar" type="submit" color="primary" class="submit-btn" />
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
.q-card-section {
  display: flex;
  align-items: center;
  justify-content: center;
}

.dog-cat {
  width: 100%;
  max-width: 100%;
  object-fit: cover;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
}

.logo {
  width: 30%;
}

.help-options {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
}

.form-fields {
  width: 100%;
  max-width: 400px;
}

.input-field {
  width: 100%;
}

.submit-btn {
  width: 100%;
  max-width: 400px;
  background-color: #1976D2;
  color: #fff;
}

.submit-btn:hover {
  background-color: #1565C0;
}

@media (max-width: 768px) {
  .q-card-section {
    flex-direction: column;
  }

  .dog-cat {
    width: 100%;
    height: auto;
  }

  .form-container {
    width: 100%;
  }
}
</style>
