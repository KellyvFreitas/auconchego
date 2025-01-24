<template>
  <q-card-section class="card">
    <div>
     <p class="titulo">Veja abaixo as formas de ajudar:</p>
      <h5 style="color: #5A41A0">1) Doações via PIX ou transferência</h5>
      <span class="titulo">A cada 25 reais, você ajuda 3 doguinhos ou gatinhos. Para doar, você pode fazer uma transferência bancária ou PIX;</span>

      <div>
        <ul class="titulo">
          <span class="text-black text-bold">PIX</span>
          <li><span class="text-black text-bold">E-mail:</span>contato@contato.com.br</li>
          ou
          <li><span class="text-black text-bold">CNPJ:</span>##.###.###/####-##</li>
        </ul>
      </div>

      <span class="text-black text-bold titulo">TED ou Depósito em conta</span>
      <div class="titulo q-mt-md">
        <p>Banco do Brasil</p>
        <p>Agencia: 0000-22</p>
        <p>Conta-Corrente: 22222-2</p>
        <p>Auconchego</p>
        <p>CNPJ: ##.###.###/####-##</p>
      </div>

      <h5 style="color: #5A41A0">Doações Recorrentes</h5>
      <span class="titulo">Ao contribuir mensalmente, você ainda recebe por email um boletim mensal com prestação de contas das nossas atividades.</span>

      <h5 style="color: #5A41A0">Mudar a vida dos animais de rua é possível e já está acontecendo!</h5>
      <div>
        <span class="titulo">Neste trabalho conjunto entre Auconchego + Voluntários + Doadores financeiros,
          já ajudamos mais de 10mil cachorros e gatos a terem uma cama quentinha para dormir <3</span>
      </div>
      <span class="titulo">Vem fazer parte desse movimento! =D </span>

      <div>
        <span> Informações administrativas </span>
        <p class="titulo">O Auconchego surgiu em 2015 como uma iniciativa informal de pessoas apaixonadas por animais.
      Em 2016, foi cadastrada no cnpj  ##.###.###/####-##, recebeu o nome de Auconchego e tornou-se
      oficialmente uma Organização da Sociedade Civil.</p>
      </div>

    </div>
  </q-card-section>
</template>
<script>
export default {
  name: 'FormasAjudar',
}
</script>
<style>
.titulo {
  font-size: 16px;
  color: gray;
}

.card {
  display: flex;
  justify-content: center;
  margin-left: 40px;

}

.text {
  font-size: 16px;
  color: gray;
}
</style>
