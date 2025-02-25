const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
  },
  {
    path: '/quero-ajudar',
    component: () => import('pages/quero-ajudar.vue')
  },
  {
    path: '/quero-adotar',
    component: () => import('pages/quero-adotar.vue')
  },
  {
    path: '/quero-apadrinhar',
    component: () => import('pages/quero-apadrinhar.vue')
  },
  {
    path: '/voluntarios',
    component: () => import('pages/voluntarios.vue')
  },
  {
    path: '/adote-com-responsabilidade',
    component: () => import('components/AdoteComResponsabilidade.vue')
  },
  {
    path: '/perguntas-frequentes',
    component: () => import('pages/perguntas-frequentes.vue')
  },
  {
    path: '/cadastro-adocao',
    component: () => import('pages/CadastroAdocao.vue')
  },
  {
    path: '/login',
    component: () => import('pages/Administrador/TelaLogin.vue')
  },
]

export default routes
