<template>
  <q-card-section class="card">
    <div>
      <p class="titulo text-center">Veja abaixo as formas de ajudar:</p>

      <div>
        <h6 class="titulo-destaque">* Doações via PIX ou transferência</h6>
        <p class="titulo">
          A cada 25 reais, você ajuda 3 doguinhos ou gatinhos. Para doar, você pode fazer uma transferência bancária ou PIX.
        </p>

        <div class="q-mt-lg">
          <span class="subtitulo">PIX</span>
          <ul>
            <li><span class="text-bold">E-mail:</span> contato@contato.com.br</li>
            <li><span class="text-bold">CNPJ:</span> ##.###.###/####-##</li>
          </ul>
        </div>

        <div class="q-mt-md">
          <span class="subtitulo">TED ou Depósito em conta</span>
          <p>Banco do Brasil</p>
          <p>Agência: 0000-22</p>
          <p>Conta-Corrente: 22222-2</p>
          <p>Auconchego</p>
          <p>CNPJ: ##.###.###/####-##</p>
        </div>
      </div>

      <div class="q-mt-md">
        <h6 class="titulo-destaque">* Doações Recorrentes</h6>
        <p class="titulo">
          Ao contribuir mensalmente, você ainda recebe por e-mail um boletim mensal com prestação de contas das nossas atividades.
        </p>
      </div>

      <h5 class="text-center destaque">
        <TextHighlight color="#BBED2F">
          Mudar a vida dos animais de rua é possível e já está acontecendo!
        </TextHighlight>
      </h5>

      <div>
        <p class="titulo text-center">
          Neste trabalho conjunto entre <b>Auconchego + Voluntários + Doadores financeiros</b>, já ajudamos mais de 10 mil cachorros e gatos a terem uma cama quentinha para dormir ❤️
        </p>
      </div>

      <p class="text-center titulo q-mt-md">Vem fazer parte desse movimento! 😃</p>

      <div class="q-mt-md">
        <span class="subtitulo">Informações administrativas</span>
        <p class="titulo">
          O Auconchego surgiu em 2015 como uma iniciativa informal de pessoas apaixonadas por animais.
          Em 2016, foi cadastrada no CNPJ ##.###.###/####-##, recebeu o nome de Auconchego e tornou-se
          oficialmente uma Organização da Sociedade Civil.
        </p>
      </div>
    </div>
  </q-card-section>
</template>

<script>
import TextHighlight from "components/TextHighlight.vue";

export default {
  name: "FormasAjudar",
  components: { TextHighlight },
};
</script>

<style scoped>
.titulo {
  font-size: 16px;
  color: gray;
  text-align: justify;
}

.titulo-destaque {
  color: #5A41A0;
  font-weight: bold;
}

.subtitulo {
  font-size: 18px;
  font-weight: bold;
  color: black;
}

.card {
  display: flex;
  justify-content: center;
  margin-left: 40px;
}

.destaque {
  color: #5A41A0;
  font-weight: bold;
}
</style>
