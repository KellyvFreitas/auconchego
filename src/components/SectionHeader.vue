  <template>
    <q-card-section>
      <img class="flex-center flex" style="width: 70%; border-radius: 14px; margin: 0 auto;" src="src/assets/doguinhos.jpg">
      <q-card-section class="q-gutter-md flex flex-center q-pa-md">
        <h3 class="text-h3 text-md-h3 text-sm-h4">
          <TextHighlight color="#BBED2F">Encontre seu companheiro perfeito</TextHighlight>
        </h3>
        <div class="row items-center justify-center q-mt-md">
          <div class="col-12 col-md-6 text-center">
            <p class="text-body1 text-md-body1 text-sm-body2">
              Em busca de alegria incondicional? Seu novo melhor amigo está esperando por você aqui! 🐶
            </p>
            <p class="text-body1 text-md-body1 text-sm-body2">
              Nós somos a ponte entre o amor sem limites de um cãozinho ou um gatinho para um lar cheio de carinho.
            </p>
            <p class="text-body1 text-md-body1 text-sm-body2">
              <strong>Temos muitos candidatos! Mais de 250 peludinhos de todas as cores, tamanhos e personalidades. Todos prontos para serem seus companheiros fiéis, já castrados, vacinados e vermifugados.</strong>
            </p>
            <p class="text-body1 text-md-body1 text-sm-body2">
              Explore nossas adoções e agende sua visita para conhecê-los pessoalmente!
            </p>
          </div>
          <div class="col-12 col-md-6 flex flex-center">
            <q-img
              src="src/assets/image4.png"
              class="q-responsive rounded-borders"
              style="max-width: 50vh; max-height: 43vh;"
            />
          </div>
        </div>
      </q-card-section>


      <q-card-section style="background-color: #F5FFD9" class="text-center">
        <h4><text-highlight color="#F6CB89">Vamos unir patinhas e corações!</text-highlight> 🐾</h4>
      </q-card-section>
      <q-card-section class="flex-center flex">
        <div class="flex flex-column align-center Card" style="width: 30vh; height: 55vh; border-color: #CE8E41FF">
          <img style="width: 200px; border-radius: 100px; height: 200px" src="src/assets/image4.png">
          <h6 style="margin-top: 10px;"><strong>Pronto para adotar?</strong></h6>
          <p style="margin-top: 10px;">Entre em contato conosco!</p>
          <div class="flex justify-end" style="margin-top: 10px;">
            <q-btn :ripple="false" no-caps style="width: 20vh; background-color: #CE8E41FF; color: white; font-size: 14px; border-radius: 20px;">Quero Adotar</q-btn>
          </div>
        </div>

        <div class="flex flex-column align-center Card"  style="width: 30vh; height: 60vh; border-color: #A6CA45">
          <img style="width: 200px; border-radius: 100px; height: 200px" src="src/assets/doguinho.jpg">
          <h6 style="margin-top: 10px;"><strong>Quer se tornar um herói voluntário?</strong></h6>
          <p style="margin-top: 10px;">Seja presencial ou virtual toda ajuda é essencial para eles!</p>
          <div class="flex justify-end">
            <q-btn :ripple="false" no-caps style="width: 15vh; background-color: #CE8E41FF; color: white; font-size: 14px; border-radius: 20px;">Quero Ajudar</q-btn>
          </div>
        </div>

        <div class="flex flex-column align-center Card"  style="width: 30vh; height: 65vh; border-color: #5A41A0" >
          <img style="width: 200px; border-radius: 100px; height: 200px" src="src/assets/LOGO.png">
          <h6 style="margin-top: 10px;"><strong>Conheça nossos Voluntários</strong></h6>
          <p style="margin-top: 10px;">Voluntários que fazem a diferença e nos ajudam a cuidar do <projeto class=""></projeto></p>
          <div class="flex justify-end" style="margin-top: 10px;">
            <q-btn :ripple="false" no-caps style="width: 20vh; background-color: #CE8E41FF; color: white; font-size: 14px; border-radius: 20px;">Voluntários</q-btn>
          </div>
        </div>

      </q-card-section>

    </q-card-section>
  </template>

  <script>
  import TextHighlight from "components/TextHighlight.vue";
  export default {
    name: 'SectionHeader',
    components: { TextHighlight }
  }
  </script>
  <style>
  .Card {
    font-size: 16px;
    border: 4px solid rgb(233, 211, 117);
    border-radius: 120px;
    padding: 20px;
    text-align: center;
    align-self: center;
    margin-top: 30px;
    margin-right: 20px;
    width: 30vh;
    height: 50vh;
    flex-direction: column;
    align-items: center;
  }
  </style>

