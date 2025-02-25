<template>
  <div class="faq-container">
    <h5 class="faq-title">🐾 Perguntas Frequentes</h5>

    <q-list separator class="q-pb-lg">
      <q-expansion-item class="faq-item" expand-separator label="O site cobra alguma taxa?">
        <q-card class="faq-card">
          <q-card-section>
            <span>
              ❌ Não, nenhuma taxa! A ONG <strong>Auconchego</strong> faz a divulgação do animal, e quem adota não paga absolutamente nada.
            </span>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item class="faq-item" expand-separator label="Quero adotar. Como eu faço?">
        <q-card class="faq-card">
          <q-card-section>
            <span>
              🎉 Parabéns pela escolha! 🐶🐱 <br />
              <q-btn class="faq-btn" label="Clique aqui" @click="verAnimais" />
              para ver os animais disponíveis para adoção.
              <br />
              Antes, <q-btn class="faq-btn faq-btn-secondary" label="Confira nossas dicas" @click="verDicas" />
              e veja se você está pronto para ter um novo membro na família.
            </span>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item class="faq-item" expand-separator label="Tenho cachorros ou gatos para vender. Posso divulgá-los aqui?">
        <q-card class="faq-card">
          <q-card-section>
            <span>
              🚫 <strong>É claro que não!</strong> A ONG Auconchego é um site <strong>exclusivamente de adoção</strong>.
              Usuários que tentarem vender animais terão seu cadastro <strong>excluído permanentemente</strong>.
            </span>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item class="faq-item q-pb-lg" expand-separator label="Sei de um animal que está sofrendo maus-tratos. O que devo fazer?">
        <q-card class="faq-card">
          <q-card-section>
            <span>
              🚨 <strong>Denuncie!</strong> A <strong>Lei 9605/98</strong> prevê os maus-tratos a animais como crime. <br />
              Se for flagrante, <strong>disque 190</strong> e chame a polícia. <br />
              Se não for, junte o máximo possível de provas (fotos, vídeos, testemunhas) e faça um <strong>boletim de ocorrência</strong> na delegacia mais próxima. <br />
              <em>Não seja omisso, pois a omissão só favorece o agressor, nunca a vítima.</em>
            </span>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'PerguntasFrequentes',
  setup() {
    const router = useRouter();
    return {
      router
    };
  },
  methods: {
    verAnimais() {
      this.$router.push('/quero-adotar');
    },
    verDicas() {
      this.$router.push('/adote-com-responsabilidade');
    }
  }
};
</script>

<style scoped>
.faq-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  background: #fffaf0;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.faq-title {
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  color: #ff5722;
  margin-bottom: 20px;
}

.faq-item {
  background: #fff;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
}

.faq-item:hover {
  background: #fff3e0;
}

.faq-card {
  background: #fef5e7;
  border-radius: 10px;
  padding: 15px;
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
}

.faq-btn {
  background: #ff5722;
  color: #fff;
  border-radius: 8px;
  padding: 5px 15px;
  margin-top: 10px;
  transition: 0.3s;
}

.faq-btn:hover {
  background: #e64a19;
}

.faq-btn-secondary {
  background: #607d8b;
}

.faq-btn-secondary:hover {
  background: #455a64;
}
</style>
