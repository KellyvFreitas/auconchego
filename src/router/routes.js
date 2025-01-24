const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
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
  }
]

export default routes
