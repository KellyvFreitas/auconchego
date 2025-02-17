<template>
  <div class="container">
    <img class="imageTela" src="src/assets/telaLogin.jpg" alt="Imagem de fundo">
    <div class="login">
      <img class="logo" src="src/assets/LOGO.png" alt="Logo da plataforma">
      <p class="title">Faça seu Login</p>
      <span class="subtitle">Para adotar um animalzinho você precisa ter cadastro!</span>

      <q-form class="form">
        <q-input
          label="E-mail"
          outlined
          type="email"
          v-model="email"
          autocomplete="email"
        />

        <q-input
          label="Senha"
          outlined
          v-model="senha"
          autocomplete="current-password"
          :type="isPasswordVisible ? 'text' : 'password'"
          class="q-mt-md"
        >
          <template v-slot:append>
            <q-icon
              :name="isPasswordVisible ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="togglePasswordVisibility"
            />
          </template>
        </q-input>

        <q-btn class="q-mt-lg btn-login" label="Entrar" @click="handleLogin" />

        <div class="actions">
          <router-link to="/cadastro-adocao">
            <q-btn flat class="btn-link" label="Não sou cadastrado" />
          </router-link>
          <q-btn flat class="btn-link" label="Esqueceu sua senha?" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TelaLogin',
  data() {
    return {
      email: '',
      senha: '',
      isPasswordVisible: false
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },
    handleLogin() {
      // Lógica para login (simulação)
      if (!this.email || !this.senha) {
        this.$q.notify({
          type: 'negative',
          message: 'Preencha todos os campos!'
        });
        return;
      }

      this.$q.notify({
        type: 'positive',
        message: 'Login realizado com sucesso!'
      });
    }
  }
}
</script>

<style scoped>
/* Layout geral */
.container {
  display: flex;
  width: 100%;
  height: 100vh;
}

.imageTela {
  width: 50%;
  height: 100vh;
  object-fit: cover;
}

.login {
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  background: #fff;
}

.logo {
  width: 30%;
  margin-bottom: 15px;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.subtitle {
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
}

/* Formulário */
.form {
  width: 80%;
  max-width: 400px;
}

.btn-login {
  width: 100%;
  background-color: #1976D2;
  color: #fff;
}

.btn-login:hover {
  background-color: #1565C0;
}

/* Links de ação */
.actions {
  margin-top: 15px;
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-link {
  color: #1976D2;
  font-size: 0.9rem;
}

.btn-link:hover {
  text-decoration: underline;
}

/* Responsividade */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .imageTela {
    width: 100%;
    height: 40vh;
  }

  .login {
    width: 100%;
    height: auto;
    padding: 30px;
  }
}
</style>
